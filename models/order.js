import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Order = sequelize.define("Order", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        status: { type: DataTypes.STRING, defaultValue: "pending" },
    }, {
        tableName: "orders",
        timestamps: true,
    });

    return Order;
};