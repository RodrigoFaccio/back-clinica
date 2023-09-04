import express, { Request, Response } from 'express';
import { createSectorController, deleteSectorController, listSectorController, updateSectorController } from '../controller/sector';



const router = express.Router();
console.log('route')

router.post('/create',createSectorController);
router.get('/',listSectorController);
router.put('/:id',updateSectorController);
router.delete('/:id',deleteSectorController);






















  
export default router;
