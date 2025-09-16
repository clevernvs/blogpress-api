import { User } from "./user.model";

export class UserService {
    async findAll() {
        const users = await User.findAll();
        return users;
    }

    async findById(id: number) {
        const user = await User.findByPk(id);
        return user;
    }

    async create(data: any) {
        return data;
    }

    async delete(id: number) {
        return id;
    }
}