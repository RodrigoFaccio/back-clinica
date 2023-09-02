// Check if the username already exists

import { prisma } from "../../prismaClient";

export async function existingUser(username: string) {
    const existingUser = await prisma.user.findFirst({
        where: {
          username,
        },
      });

      return existingUser
  }
  

  
