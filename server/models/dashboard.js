//server/medels/user.js
const Sequelize = require("sequelize");

/* 사용자 정보 DB */
module.exports = class Dashboard extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blocks: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
        transactions: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
        cpu: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
        memory: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
        storage: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
        blockchainInfo: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
        ledgerInfo: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
        resourceInfo: {
          type: Sequelize.INTEGER(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Dashboard",
        tableName: "dashboards",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
};
