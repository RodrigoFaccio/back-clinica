import { Request, Response } from 'express';
import { createUser, deleteUser, listUsers, login, updateUser } from '../../services/user/user';

export async function loginUserController(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    const user = await login(username, password);
    if (user) {
      // Return user information or success response
      res.status(200).json(user);
    } else {
      // Return error response
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}

export async function createUserController(req: Request, res: Response) {
  const { username, password,level,sectorId,active } = req.body;

  try {
    const user = await createUser(username, password,level,Number(sectorId),active);
    if (user) {
      // Return user information or success response
      res.status(200).json(user);
    } else {
      // Return error response
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}


export async function updateUserController(req: Request, res: Response) {
  const { id, password } = req.body;

  try {
    const user = await updateUser(id, password);
    if (user) {
      // Return user information or success response
      res.status(200).json(user);
    } else {
      // Return error response
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}
export async function deleteUserController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const user = await deleteUser(Number(id));
    if (user) {
      // Return user information or success response
      res.status(200).json(user);
    } else {
      // Return error response
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}
export async function listUsersController(req: Request, res: Response) {
  const { name, date} = req.query;

  try {
    const user = await listUsers(name as string, date as string);
    if (user) {
      // Return user information or success response
      res.status(200).json(user);
    } else {
      // Return error response
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred' });
  }
}

