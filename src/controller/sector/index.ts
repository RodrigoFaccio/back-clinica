import { Request, Response } from 'express';
import { createCategory, deleteCategory, listCategory, updateCategory } from '../../services/categories';
import { createAnswers, listAnswers, listAnswersById, listFilesAll, listPatientById } from '../../services/answers';
import { createSector, deleteSector, listSector, updateSector } from '../../services/sector';

export async function createSectorController(req: Request, res: Response) {
    const {name} = req.body;
  try {
    const sector = await createSector(name);
      res.status(200).json(sector);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}

export async function listSectorController(req: Request, res: Response) {
   
  try {
    const sector = await listSector();
      res.status(200).json(sector);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}
export async function updateSectorController(req: Request, res: Response) {
  const {name} = req.body;
  const {id} = req.params;

   
  try {
    const sector = await updateSector(Number(id),name);
      res.status(200).json(sector);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}
export async function deleteSectorController(req: Request, res: Response) {
  const {name} = req.body;
  const {id} = req.params;

   
  try {
    const sector = await deleteSector(Number(id));
      res.status(200).json(sector);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}


  