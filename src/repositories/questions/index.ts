
import { prisma } from "../../prismaClient";

export async function existingQuestion(question: string,categoryId:number) {
    const existingUser = await prisma.questions.findFirst({
        where: {
            question,
            AND:{
                categoryId
            }

        },
      });

      return existingUser
  }
  

  
