// import { User } from "./user.model";

export class UserService {
    async findAll() {
        // const users = await User.findAll();
        // return users;
        return "Todos os usuarios";
    }

    async findById(id: number) {
        // const user = await User.findByPk(id);
        // return user;
        return `O ID do Usuário é id: ${id}`;
    }

    async create(data: any) {
        return data;
    }

    async delete(id: number) {
        return id;
    }
}