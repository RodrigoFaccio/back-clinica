import express, { Request, Response } from 'express';
import { createQuestionController, listQuestionsController } from '../controller/questions/questionsController';



const router = express.Router();

router.post('/create',createQuestionController);
router.get('/:id',listQuestionsController);














  
export default router;
