const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const UserCloth = sequelize.define("UserCloth", {
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = UserCloth;
