'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Products', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING, allowNull: false },
            description: { type: Sequelize.STRING },
            price: { type: Sequelize.INTEGER },
            category_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Categories', key: 'id' },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            },
            quantity: { type: Sequelize.INTEGER, defaultValue: 0 },
            createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
            updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
        });
    },
    down: async(queryInterface) => {
        await queryInterface.dropTable('Products');
    },
};