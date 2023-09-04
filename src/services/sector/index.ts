import { prisma } from "../../prismaClient";
import { existingSector } from "../../repositories/sector/sectorRepository";

export async function createSector(name:string) {

  const existSector = await existingSector(name)

    if(existSector){
      return {
        code:400,
        message:'Setor ja existe'
      }
    }

    const sectors = await prisma.sector.create({
        data: {
         name,
        
        },
    });

    return {
        code:200,
        data:sectors
    }
  
}
export async function listSector() {

    

  const sectors = await prisma.sector.findMany()

  return {
      code:200,
      data:sectors
  }

}


export async function updateSector(id: number, name: string) {
    const updateSector = await prisma.sector.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  
    return {
      code: 200,
      data: updateSector,
    };
  }
  export async function deleteSector(id: number) {
    await prisma.sector.delete({
      where: {
        id,
      },
    });
  
    return {
      code: 200,
      message: 'Setor removida',
    };
  }



