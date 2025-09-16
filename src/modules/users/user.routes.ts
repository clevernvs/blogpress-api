import { Router } from "express";
import {
    getAllUsers,
    getUserById,
    createUser
} from "./user.controller";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
// router.delete("/:id", deleteUser);

export default router;