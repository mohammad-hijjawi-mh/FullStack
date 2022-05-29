const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Reservations = sequelize.define("sign_up", {
    First_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

module.exports = Reservations;