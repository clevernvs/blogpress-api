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

export const getUserById = async (req: Request, res: Response): Promise<void> => {

    const { id } = req.params;

    try {
        const user = await userService.findById(Number(id));
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const userData = req.body;
    try {
        const user = await userService.create(userData);
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usupario.' });
    }
}

// export const deleteUser = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const user = UserService.delete(Number(id));
//     res.json(user);
// }
