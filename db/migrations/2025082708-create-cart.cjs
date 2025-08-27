'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Carts', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Users', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Products', key: 'id' },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            },
            quantity: { type: Sequelize.INTEGER, defaultValue: 1 },
            createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
            updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
        });
    },
    down: async(queryInterface) => {
        await queryInterface.dropTable('Carts');
    },
};