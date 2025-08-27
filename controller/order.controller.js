// controllers/order.controller.js
export const createOrder = (req, res) => {
    try {
        const order = req.body;
        res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
};

export const getOrders = (req, res) => {
    try {
        const orders = [
            { id: 1, product: "Laptop", quantity: 2 },
            { id: 2, product: "Phone", quantity: 1 },
        ];
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
};