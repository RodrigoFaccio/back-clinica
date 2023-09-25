import express, { Request, Response } from 'express';
import { createUserController, listUsers, loginUserController } from '../controller/user/userController';


const routerUser = express.Router();

routerUser.post('/login',loginUserController);
routerUser.post('/create',createUserController);
routerUser.put('/',loginUserController);
routerUser.get('/list',listUsers);











  
export default routerUser;
