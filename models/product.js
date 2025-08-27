import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Product = sequelize.define("Product", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        price: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        tableName: "products",
        timestamps: true,
    });

    return Product;
};