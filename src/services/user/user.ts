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

export async function createUser(username: string, password: string,level:string,sectorId:number,active:boolean) {
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
      sectorId,
      active
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

  await prisma.user.update({
    where: {
      id,
    },
    data:{
      active:false
    }
  });

  return {
    code: 200,
    message: 'usuario deletado ',
  };
}
export async function listUsers(name?: string, date?: string) {
  const nameCondition = name ? { username: { contains: name, mode: 'insensitive' } } : {};

  let patients = await prisma.user.findMany({
    //@ts-ignore
    where: {
      ...nameCondition,
      active:true
    },
  });

  console.log("Total patients before date filter: ", patients.length);

  if (date) {
    const targetDate = new Date(date).toISOString().split("T")[0];
    console.log("Target Date: ", targetDate);

    patients = patients.filter(patient => {
      const createdAt = new Date(patient.created_at).toISOString().split("T")[0];
      console.log("Created At: ", createdAt);

      return createdAt === targetDate;
    });
  }



  console.log("Total patients after date filter: ", patients.length);

  return {
    code: 200,
    data: patients,
  };
}