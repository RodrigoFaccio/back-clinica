import express, { Request, Response } from 'express';
import { createUserController, deleteUserController, listUsers, loginUserController } from '../controller/user/userController';


const routerUser = express.Router();

routerUser.post('/login',loginUserController);
routerUser.post('/create',createUserController);
routerUser.put('/',loginUserController);
routerUser.get('/list',listUsers);
routerUser.delete('/',deleteUserController);












  
export default routerUser;
