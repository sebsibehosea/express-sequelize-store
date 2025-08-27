// routes/product.routes.js
import express from "express";
import { getProducts, createProduct } from "../controller/product.controller.js";

const router = express.Router();

// Routes
router.get("/", getProducts);
router.post("/", createProduct);

export default router; // ✅ default export