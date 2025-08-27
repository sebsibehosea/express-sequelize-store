'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('ProductImages', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            image: { type: Sequelize.STRING },
            product_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Products', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
            updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
        });
    },
    down: async(queryInterface) => {
        await queryInterface.dropTable('ProductImages');
    },
};