// routes/order.routes.js
import express from "express";
import { getOrders, createOrder } from "../controller/order.controller.js";

const router = express.Router();

// Routes
router.get("/", getOrders);
router.post("/", createOrder);

export default router; // ✅ default export