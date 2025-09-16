import express from "express";
import dotenv from "dotenv";
import postRoutes from "./modules/posts/post.routes";
import userRoutes from "./modules/users/user.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (_req, res) => {
    res.send("API do Blog está rodando 🚀");
});

export default app;