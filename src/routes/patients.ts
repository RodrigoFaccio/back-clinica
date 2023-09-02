import express, { Request, Response } from 'express';
import { createPatient } from '../services/patients';
import { createPatientController, deletePatientController, listPatientsController, updatePatientController } from '../controller/patients/patientsController';


const router = express.Router();

router.post('/create',createPatientController);
router.get('/',listPatientsController);
router.put('/:id',updatePatientController);
router.delete('/:id',deletePatientController);












  
export default router;
