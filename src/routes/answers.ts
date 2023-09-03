import express, { Request, Response } from 'express';

import { createAnswersController, listAnswersByIdController, listAnswersController, listFilesAllController, listPatientByIdController } from '../controller/answers';
import { listPatientById } from '../services/answers';


const router = express.Router();
console.log('route')

router.post('/create',createAnswersController);
router.get('/',listAnswersController);
router.get('/:fileId',listAnswersByIdController);
router.get('/all/list',listFilesAllController);
router.get('/all/:patientId',listPatientByIdController);

















  
export default router;
