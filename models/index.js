const Genre = require("./genre");
const Movie = require("./movie");
const Actor = require("./actor");

Genre.hasMany(Movie);
Movie.hasMany(Actor);

// todo Super Many-to-Many Relationship
// Movie.belongsToMany(Genre, { through: Actor });
// Genre.belongsToMany(Movie, { through: Actor });
// Actor.belongsTo(Movie);
// Actor.hasMany(Movie);

module.exports = {
  Genre,
  Movie,
  Actor,
};
