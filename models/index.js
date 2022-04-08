const Genre = require("./genre");
const Movie = require("./movie");
const Actor = require("./actor");

Genre.hasMany(Movie);
Movie.hasMany(Actor);
// Actor.hasMany(Movie);

module.exports = {
  Genre,
  Movie,
  Actor,
};
