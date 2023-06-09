'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.TINYINT(1)
      },
      photo_id: {
        type: Sequelize.STRING(255),
      },
      type_report_id: {
        type: Sequelize.INTEGER(1),
        references:{

          model:'types_reports',
          key:'id'
          
        }
      },
      request_id: {
        type: Sequelize.INTEGER(5),
        references:{

          model:'requests',
          key:'id'
          
        }
      },
      user_id: {
        type: Sequelize.INTEGER(5),
        references:{

          model:'users',
          key:'id'
          
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        allowNull: true,
        type:Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reports');
  }
};