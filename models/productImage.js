import { DataTypes } from "sequelize";

export default (sequelize) => {
    const ProductImage = sequelize.define("ProductImage", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        url: { type: DataTypes.STRING, allowNull: false },
    }, {
        tableName: "product_images",
        timestamps: true,
    });

    return ProductImage;
};