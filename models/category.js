import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Category = sequelize.define("Category", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
    }, {
        tableName: "categories",
        timestamps: true,
    });

    return Category;
};