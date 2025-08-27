import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Address = sequelize.define("Address", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
    }, {
        tableName: "addresses",
        timestamps: true,
    });

    return Address;
};