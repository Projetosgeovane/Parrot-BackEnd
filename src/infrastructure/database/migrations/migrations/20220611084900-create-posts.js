'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Users_idUsers: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'idUsers'
        }, allowNull: false
      },
      name: {
        type: Sequelize.STRING(70)
      },
      email: {
        type: Sequelize.STRING(70)
      },
      apartment: {
        type: Sequelize.INTEGER
      },
      passoword: {
        type: Sequelize.STRING(120)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};