import express from "express";
import {
  getCurrentUser,
  login,
  logout,
  register,
} from "../controller/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", authMiddleware, getCurrentUser);
authRouter.post("/logout", logout);

export default authRouter;
