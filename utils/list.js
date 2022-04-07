const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const List = async (argv) => {
  try {
    if (argv.actor) {
      const actor = await Actor.findOne({
        where: { name: argv.name },
      });
      console.log(actor.toJSON());
    } else if (argv.movie) {
      const movie = await Movie.findOne({
        where: { title: argv.title },
      });
      console.log(movie.toJSON());
    } else if (argv.genre) {
      const genre = await Genre.findAll({
        where: { category: argv.category },
      });
      console.log(genre);
    }
  } catch (error) {}
};

module.exports = List;
