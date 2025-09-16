import { Request, Response } from "express";
import { PostService } from "./post.service";

export const PostController = {
    getAll: (req: Request, res: Response) => {
        res.json(PostService.getAll());
    },

    getById: (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const post = PostService.getById(id);
        if (!post) return res.status(404).json({ message: "Post não encontrado" });
        res.json(post);
    },

    create: (req: Request, res: Response) => {
        const { title, content, author } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({ message: "Campos obrigatórios: title, content, author" });
        }
        const newPost = PostService.create(title, content, author);
        res.status(201).json(newPost);
    },

    delete: (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const success = PostService.delete(id);
        if (!success) return res.status(404).json({ message: "Post não encontrado" });
        res.status(204).send();
    }
};
