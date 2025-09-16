import express from "express";
import dotenv from "dotenv";
import postRoutes from "./modules/posts/post.routes";
import userRoutes from "./modules/users/user.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v2/posts", postRoutes);
app.use("/api/v2/users", userRoutes);

app.get("/api/v2/health", (_req, res) => {
    res.send({
        status: "Ok",
        message: "API do Blogpress está rodando. 🚀"
    });
});

app.get("/", (_req, res) => {
    res.send("API do Blogpress está rodando. 🚀");
});

export default app;