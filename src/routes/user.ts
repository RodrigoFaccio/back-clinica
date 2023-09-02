import express, { Request, Response } from 'express';
import { createUserController, loginUserController } from '../controller/user/userController';


const routerUser = express.Router();

routerUser.post('/login',loginUserController);
routerUser.post('/create',createUserController);
routerUser.put('/',loginUserController);










  
export default routerUser;
