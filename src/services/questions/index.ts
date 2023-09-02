import { prisma } from "../../prismaClient";
import { existingQuestion } from "../../repositories/questions";

export async function createQuestions(question:string,categoryId:number,type:string) {
  const existing = await existingQuestion(question,categoryId)

  if(existing){
    return{
      code:400,
      message:"Essa pergunta ja existe"

    }
  }
  console.log(existing)

  const questions = await prisma.questions.create({
    data:{
      question,
      type,
      categoryId
    }
  })

    return{
      code:200,
      data:questions
    }
   
  
}
export async function listQuestions(categoryId:number) {

    
    const questions = await prisma.questions.findMany({
        where: {
            categoryId,
            
            
          },
          orderBy: {
            id: 'asc', // ou 'desc' para ordem decrescente
          },
          include:{
            category:true
          }
    })

    return {
        code:200,
        data:questions
    }
  
}


