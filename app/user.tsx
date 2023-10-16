"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserComponent({ user }: { user: User }) {
  const [inputValue, setInputValue] = useState(user.username);

  const router = useRouter();

  const updateUser = async () => {
    console.log("user.id >>>>", user.id);
    console.log("user.username >>>>", inputValue);

    await fetch(`/api/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputValue,
        id: user.id,
      }),
    });
    router.refresh();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update inputValue as the input value changes
  };

  return (
    <li key={user.id} className="space-x-4">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={updateUser}>Update2</button>
    </li>
  );
}
