import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define("User", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
    }, {
        tableName: "users",
        timestamps: true,
    });

    return User;
};