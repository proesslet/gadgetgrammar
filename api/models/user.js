const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Define model for word table
const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    currentstreak: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    higheststreak: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    timestamps: false,
    schema: "gadgetgrammar",
  }
);

module.exports = User;
