// npm install sequelize mysql2 yargs
//  npm install -y init
// npm install dotenv
// 4 things needed to set up

// line 7,8,9 do this to ensure env is setup
require("dotenv").config();
// const db = new Sequelize(process.env.MYSQL_URI);
// console.log(process.env);
const connection = require("./connection");

// !model connections
const Genre = require("./models/genre");
const Movie = require("./models/movie");
const Actor = require("./models/actor");

// our main function - using await keyword hence async
(async () => {
  await Genre.sync({ alter: true });
  await Movie.sync({ alter: true });
  await Actor.sync({ alter: true });

  // ! add
  const genre = await Genre.create({ category: "comedy" });
  const movie = await Movie.create({ title: "funny film", GenreId: genre.id });
  const actor = await movie.createActor({
    name: "Jane",
    MovieId: movie.id,
  });

  // ! list
  for (const genre of await Genre.findAll({ include: Movie })) {
    const movie = await genre.getMovie();
    // const al2 = await Movie.findOne({include: Genre, where: {title: al1.title}});
    // const genreName = await al2.getGenre();
    const actor = await movie.getActor();
    // console.log(`${actor.name} by ${genre.category} on ${al2.title}`);
    console.log(actor, movie, genre);
  }

  // ! remove/delete
})();

// *useful link
// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
