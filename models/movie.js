//  SHORT CUT TO CREATE 3 touch models/{Genre,Movies,songs}.js
const { DataTypes, INTEGER } = require("sequelize");
const db = require("../connection");
const Genre = require("./genre");
const Actor = require("./actor");

const Movie = db.define(
  "Movie",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    rating: { type: INTEGER },
  },
  {
    indexes: [{ unique: true, fields: ["title"] }],
  }
);

module.exports = Movie;
