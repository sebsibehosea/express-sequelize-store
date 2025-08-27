import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Cart = sequelize.define("Cart", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        tableName: "carts",
        timestamps: true,
    });

    return Cart;
};