// routes/user.routes.js
import express from "express";
import { getUsers, createUser } from "../controller/user.controller.js";

const router = express.Router();

// Routes
router.get("/", getUsers);
router.post("/", createUser);

export default router; // ✅ default export