import { Request, Response } from "express";
import { UserService } from "./user.service";

export const userService = new UserService();

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await userService.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
}

// export const getUserById = async (_req: Request, res: Response) => {
//     res.json(UserService.findById());
// }

// export const createUser = async (_req: Request, res: Response) => {
//     res.json(UserService.create());
// }

// export const deleteUser = async (_req: Request, res: Response) => {
//     res.json(UserService.delete());
// }
