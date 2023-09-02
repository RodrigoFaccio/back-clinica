import express, { Request, Response } from 'express';

import { createAnswersController, listAnswersController } from '../controller/answers';


const router = express.Router();
console.log('route')

router.post('/create',createAnswersController);
router.get('/',listAnswersController);














  
export default router;
