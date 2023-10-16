import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    await prisma.user.update({
      where: {
        id: parseInt(req.body.id),
      },
      data: {
        username: req.body.username,
      },
    });
    res.status(200).json({ message: "Updated" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
