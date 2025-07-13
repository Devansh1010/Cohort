import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { verify } from "crypto";

const router = Router();

router.post("/register", registerUser)
router.post("/verify/:token", verify)

export default router