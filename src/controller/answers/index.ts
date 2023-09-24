import { Request, Response } from 'express';
import { createCategory, deleteCategory, listCategory, updateCategory } from '../../services/categories';
import { createAnswers, listAnswers, listAnswersById, listFilesAll, listPatientById } from '../../services/answers';

export async function createAnswersController(req: Request, res: Response) {
    const {userId,patientId,data,date} = req.body;




  try {
    const answers = await createAnswers(userId,patientId,data,date);
      res.status(200).json(answers);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error });
  }
}

export async function listAnswersController(req: Request, res: Response) {
   
  try {
    const answers = await listAnswers();
      res.status(200).json(answers);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}
export async function listAnswersByIdController(req: Request, res: Response) {

    const {fileId} = req.params;
   
    try {
      const answers = await listAnswersById(fileId);
        res.status(200).json(answers);
    } catch (error) {
      // Handle error
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  
  export async function listFilesAllController(req: Request, res: Response) {
    const {userId,patientId,date} = req.query;

    try {
      const answers = await listFilesAll(Number(userId),Number(patientId),String(date));
        res.status(200).json(answers);
    } catch (error) {
      // Handle error
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  export async function listPatientByIdController(req: Request, res: Response) {
    const {patientId} = req.params
    try {
      const answers = await listPatientById(Number(patientId));
        res.status(200).json(answers);
    } catch (error) {
      // Handle error
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  