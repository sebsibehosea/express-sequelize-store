// controllers/product.controller.js
import { Product } from "../models/index.js";

export const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getProducts = async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};