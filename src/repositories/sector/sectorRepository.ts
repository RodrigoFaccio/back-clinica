// Check if the username already exists

import { prisma } from "../../prismaClient";

export async function existingSector(name: string) {
    const existingUser = await prisma.sector.findFirst({
        where: {
          name,
        },
      });

      return existingUser
  }
  

  
