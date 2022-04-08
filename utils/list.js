const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const { Genre, Movie, Actor } = require("../models/");

const list = async (argv) => {
  // !lists all movies with actors
  if (argv.listAll) {
    for (const genre of await Genre.findAll({})) {
      let actors;
      const movies = await genre.getMovies();
      const stringyMovies = JSON.stringify(movies, null, 4);
      // console.log(movies, "im the movie");
      // console.log(stringyMovies, "stringy movie i am ");
      for (const movie of movies) {
        actors = await movie.getActors();
      }
      // console.log("ima actors", actors);
      for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < actors.length; j++) {
          console.log(
            `the movie is ${movies[i].title} the actor is ${actors[j].name}`
          );
        }
      }
    }
    // ! list all - actors, movies, genres
  } else if (argv.actor) {
    const actors = await Actor.findAll({});
    for (actor of actors) {
      console.log(`Actor: ${actor.name}`);
    }
  } else if (argv.movie) {
    const movies = await Movie.findAll({});
    for (movie of movies) {
      console.log(`Title: ${movie.title}`);
    }
  } else if (argv.genre) {
    const genres = await Genre.findAll({});
    for (genre of genres) {
      console.log(genres);
      console.log(`Category: ${genre.category}`);
    }
  }
};
// else if (argv.genre) {
//       const genres = await Genre.findAll({});
//       for (genre of genres) {
//         const movies = await genre.getMovies();
//         for (movie of movies) {
//           console.log(`${genre.category} ${movie.title}`);
//         }
//       }
//     }

module.exports = list;
