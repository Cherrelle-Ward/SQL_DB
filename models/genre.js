const { DataTypes } = require("sequelize");
const db = require("../connection");
const Movie = require("./movie");

const Genre = db.define(
  "Genre",
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // indexes: [{ unique: false, fields: ["category"] }],
  }
);

// Genre.hasMany(Movie);
module.exports = Genre;
