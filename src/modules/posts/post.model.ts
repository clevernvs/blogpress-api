export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
}

export const posts: Post[] = []; // "banco de dados" em memória
