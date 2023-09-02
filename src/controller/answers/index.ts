import { Request, Response } from 'express';
import { createCategory, deleteCategory, listCategory, updateCategory } from '../../services/categories';
import { createAnswers, listAnswers } from '../../services/answers';

export async function createAnswersController(req: Request, res: Response) {
    const {files,data} = req.body;
    console.log(files,data)

  try {
    const answers = await createAnswers(files,data);
      res.status(200).json(answers);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
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

