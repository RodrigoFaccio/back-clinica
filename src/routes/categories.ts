import express, { Request, Response } from 'express';
import { createUserController, loginUserController } from '../controller/user/userController';
import { createCategoryController, deleteCategoryController, listCategoryController, updateCategoryController } from '../controller/categories/categoriesController';
import { updateCategory } from '../services/categories';


const router = express.Router();

router.post('/create',createCategoryController);
router.get('/:sectorId',listCategoryController);
router.put('/:id',updateCategoryController);
router.delete('/:id',deleteCategoryController);












  
export default router;
