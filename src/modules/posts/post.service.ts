import { Post, posts } from "./post.model";

let currentId = 1;

export const PostService = {
    getAll: (): Post[] => {
        return posts;
    },

    getById: (id: number): Post | undefined => {
        return posts.find(post => post.id === id);
    },

    create: (title: string, content: string, author: string): Post => {
        const newPost: Post = {
            id: currentId++,
            title,
            content,
            author,
            createdAt: new Date()
        };

        posts.push(newPost);
        return newPost;
    },

    delete: (id: number): boolean => {
        const index = posts.findIndex(post => post.id === id);
        if (index !== -1) {
            posts.splice(index, 1);
            return true;
        }
        return false;
    }
};
