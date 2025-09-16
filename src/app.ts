import express from "express";
import dotenv from "dotenv";
import postRoutes from "./modules/posts/post.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("API do Blog está rodando 🚀");
});

export default app;