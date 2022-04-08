const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const Remove = async ({ Actor, Genre, Movie }) => {
  if (argv.movie) {
    const remove = await Movie.destroy({
      where: {
        title: argv.title,
      },
    });
    console.log(`${remove} movie deleted`);
  } else if (argv.actor) {
    const remove = await Actor.destroy({
      where: {
        name: argv.name,
      },
    });
    console.log(`${remove} actor deleted`);
  } else if (argv.genre) {
    const remove = await Genre.destroy({
      where: {
        category: argv.category,
      },
    });
    console.log(`${remove} genre deleted`);
  }
};

module.exports = Remove;
