import { prisma } from "../../prismaClient";

export async function createPatient(name: string) {
  const newPatient = await prisma.patients.create({
    data: {
      name,
    },
  });

  return{
    code:200,
    data:newPatient
  };
}

export async function listPatients(name?: string, date?: string) {
  const nameCondition = name ? { name: { contains: name, mode: 'insensitive' } } : {};

  let patients = await prisma.patients.findMany({
    //@ts-ignore
    where: {
      ...nameCondition,
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

export async function updatePatient(id: number, newName: string) {
  const updatedPatient = await prisma.patients.update({
    where: {
      id,
    },
    data: {
      name: newName,
    },
  });

  return{
    code:200,
    data:updatedPatient
  };
}

export async function deletePatient(id: number) {
  await prisma.patients.delete({
    where: {
      id,
    },
  });

  return {
    message: 'Patient deleted successfully',
  };
}