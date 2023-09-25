import { prisma } from "../../prismaClient";
import { existingUser } from "../../repositories/user/userRepository";

export async function login(username: string, password: string) {
  const user = await prisma.user.findFirst({
    where: {
      username,
      password,
    },
  });

  if (!user) {
    return {
      code: 400,
      message: 'Usuario ou senha incorretos',
    };
  }

  return {
    code: 200,
    data: user,
  };
}

export async function createUser(username: string, password: string,level:string,sectorId:number) {
  const user = await existingUser(username);
  if (user) {
    return {
      code: 400,
      message: 'Usuario ja existe',
    };
  }

  const newUser = await prisma.user.create({
    data: {
      username,
      password,
      level,
      sectorId
    },
  });

  return {
    code: 200,
    data: newUser,
  };
}

export async function updateUser(id: number, newPassword: string) {

  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      password: newPassword,
    },
  });

  return {
    code: 200,
    data: updatedUser,
  };
}

export async function deleteUser(id: number) {

  await prisma.user.delete({
    where: {
      id,
    },
  });

  return {
    code: 200,
    message: 'usuario deletado ',
  };
}
export async function listUserServices(name:string) {
  const whereCondition = name ? { username: { contains: name,mode: 'insensitive' } } : {};
console.log(name)
  if(name!=='undefined'){
console.log('search')

    var patients = await prisma.user.findMany({
      where:{
        username:{
          contains:name,
          mode:'insensitive'
  
        }
      },
    });
  }else{
console.log('no')

    var patients = await prisma.user.findMany();
  }
  

  return {
    code:200,
    data:patients
  };
}

