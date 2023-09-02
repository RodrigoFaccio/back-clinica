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

export async function listPatients(name?: string) {
  const whereCondition = name ? { name: { contains: name.toLowerCase() } } : {};
  const patients = await prisma.patients.findMany({
    where: whereCondition,
  });

  return {
    code:200,
    data:patients
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

