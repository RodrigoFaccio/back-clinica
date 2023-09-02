
import { Request, Response } from 'express';

import {
  createPatient,
  listPatients,
  updatePatient,
  deletePatient
} from '../../services/patients';

export async function createPatientController(req: Request, res: Response) {
  const { name } = req.body;

  try {
    const newPatient = await createPatient(name);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

export async function listPatientsController(req: Request, res: Response) {
  const { name } = req.query;

  try {
    const patients = await listPatients(name as string);
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

export async function updatePatientController(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedPatient = await updatePatient(Number(id), name);
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

export async function deletePatientController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const result = await deletePatient(Number(id));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
