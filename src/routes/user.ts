import express, { Request, Response } from 'express';
import { createUserController, deleteUserController, listUsersController, loginUserController } from '../controller/user/userController';


const routerUser = express.Router();

routerUser.post('/login',loginUserController);
routerUser.post('/create',createUserController);
routerUser.put('/',loginUserController);
routerUser.get('/list',listUsersController);
routerUser.delete('/:id',deleteUserController);












  
export default routerUser;
