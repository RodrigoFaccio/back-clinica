import { Request, Response } from 'express';
import { createUser, deleteUser, login, updateUser } from '../../services/user/user';
import { createQuestions, listQuestions } from '../../services/questions';

export async function createQuestionController(req: Request, res: Response) {
  const { question,categoryId,type} = req.body;

  try {
    const questions = await createQuestions(question,categoryId,type);
    if (questions) {
      // Return questions information or success response
      res.status(200).json(questions);
    } else {
      // Return error response
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}

export async function listQuestionsController(req: Request, res: Response) {
  const { id} = req.params;

  try {
    const questions = await listQuestions(Number(id));
    if (questions) {
      // Return questions information or success response
      res.status(200).json(questions);
    } else {
      // Return error response
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}
