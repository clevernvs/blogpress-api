import { Request, Response } from "express";
import { PostService } from "./post.service";

export const postService = new PostService();

export const getAllPosts = async (_req: Request, res: Response) => {
    const allPosts = postService.findAll();
    res.json(allPosts);
}

export const getPostById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const post = postService.findById(Number(id));
    res.json(post);
}

export const createPost = async (req: Request, res: Response): Promise<void> => {
    const postData = req.body;
    const post = await postService.create(postData);

    res.status(201).json(post);
}

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await postService.delete(Number(id));
    res.json(result);
}

