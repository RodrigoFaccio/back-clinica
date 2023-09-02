// Check if the username already exists

import { prisma } from "../../prismaClient";

export async function existingCategory(name: string) {
    const existingCategory = await prisma.categories.findFirst({
        where: {
          name,
        },
      });

      return existingCategory
  }
  

  
