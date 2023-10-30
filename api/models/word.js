const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Word = sequelize.define(
  "words",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    schema: "gadgetgrammar",
  }
);

module.exports = Word;
