'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            first_name: { type: Sequelize.STRING, allowNull: false },
            last_name: { type: Sequelize.STRING, allowNull: false },
            phone_number: { type: Sequelize.STRING },
            createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
            updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
        });
    },
    down: async(queryInterface) => {
        await queryInterface.dropTable('Users');
    },
};