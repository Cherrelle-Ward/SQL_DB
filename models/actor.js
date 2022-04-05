const { DataTypes } = require("sequelize");
const db = require("../connection");
const Movie = require("./movie");

const Actor = db.define(
  "Actor",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  // { indexed: [{ unique: false, fields: ["name"] }] }
);

module.exports = Actor;
