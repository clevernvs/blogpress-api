import app from "./app";
import { sequelize } from "./config/database";
// import { Post } from "./modules/posts/post.model";

const PORT = process.env.API_PORT || 3000;

async function start() {
    try {
        await sequelize.sync({ force: false }); // cria tabelas se não existirem
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar servidor:", error);
    }
}

start();