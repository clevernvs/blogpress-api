import { Post } from "./post.model";

export class PostService {
    async findAll() {
        const posts = Post.findAll();
        return posts;
    }

    async findById(id: number) {
        const post = Post.findByPk(id);
        return post;
    }

    async create(data: any) {

        return data;
    }

    async delete(id: number) {
        return id;
    }
};
