import { prisma } from "../../prismaClient";
import { existingCategory } from "../../repositories/categoriesRepository/categoriesRepository";

export async function createCategory(name:string,sectorId:number) {

    const exist = await existingCategory(name)
    if(exist){
        return{
            code:400,
            message:'Categoria ja existe'
        }
    }

    const categories = await prisma.categories.create({
        data: {
         name,
         sectorId
        },
    });

    return {
        code:200,
        data:categories
    }
  
}
export async function listCategory(sectorId:number) {

    
    const categories = await prisma.categories.findMany({
        where: {
            sectorId,
          },
    })

    return {
        code:200,
        data:categories
    }
  
}
export async function updateCategory(id: number, name: string) {
    const updatedCategory = await prisma.categories.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  
    return {
      code: 200,
      data: updatedCategory,
    };
  }
  export async function deleteCategory(id: number) {
    await prisma.categories.delete({
      where: {
        id,
      },
    });
  
    return {
      code: 200,
      message: 'Categoria removida',
    };
  }



