const { Sequelize } = require("sequelize");
require("../connection");
const argv = require("yargs");
const { Genre, Actor, Movie } = require("../models/");

const add = async (argv) => {
  const foundGenre = await Genre.findOne({
    where: { category: argv.category },
  });
  if (!foundGenre) {
    try {
      const genre = await Genre.create({ category: argv.category });
      const movie = await Movie.create({
        title: argv.title,
        rating: argv.rating,
        GenreId: genre.id,
      });
      const actor = await movie.createActor({
        name: argv.name,
        MovieId: movie.id,
      });
      console.log("Movie Added");
    } catch (error) {
      console.log(error);
    }
  } else if (foundGenre) {
    const movie = await Movie.create({
      title: argv.title,
      rating: argv.rating,
      GenreId: foundGenre.id,
    });
    const actor = await movie.createActor({
      name: argv.name,
      MovieId: movie.id,
    });
    console.log("Movie Added");
  }
};

module.exports = add;
