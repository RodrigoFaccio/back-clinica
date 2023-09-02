import { Request, Response } from 'express';
import { createCategory, deleteCategory, listCategory, updateCategory } from '../../services/categories';

export async function createCategoryController(req: Request, res: Response) {
  const { name, sectorId } = req.body;

  try {
    const category = await createCategory(name, sectorId);
    if (category) {
      res.status(200).json(category);
    } 
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}

export async function listCategoryController(req: Request, res: Response) {
    const { sectorId } = req.params;
  
    try {
      const category = await listCategory( Number(sectorId));
      if (category) {
        res.status(200).json(category);
      } 
    } catch (error) {
      // Handle error
      res.status(500).json({ error: 'An error occurred' });
    }
  }

  export async function updateCategoryController(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
  
    try {
      const updatedCategory = await updateCategory(Number(id), name);
      if (updatedCategory.code === 200) {
        res.status(200).json(updatedCategory.data);
      } else {
        res.status(updatedCategory.code).json({ error:'erro ao editar' });
      }
    } catch (error) {
      // Handle error
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  
  export async function deleteCategoryController(req: Request, res: Response) {
    const { id } = req.params;
  
    try {
      const result = await deleteCategory(Number(id));
      if (result.code === 200) {
        res.status(200).json({ message: result.message });
      } else {
        res.status(result.code).json({ error: result.message });
      }
    } catch (error) {
      // Handle error
      res.status(500).json({ error: 'An error occurred' });
    }
  }