// this to ensure env is setup
require("dotenv").config();
// const db = new Sequelize(process.env.MYSQL_URI);
// console.log(process.env);
const connection = require("./connection");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const bcrypt = require("bcrypt");

// !model connections
const Genre = require("./models/genre");
const Movie = require("./models/movie");
const Actor = require("./models/actor");

// ! utils import
const Add = require("./utils/add");

// our main function - using await keyword hence async
(async () => {
  await Genre.sync({ alter: true });
  await Movie.sync({ alter: true });
  await Actor.sync({ alter: true });

  //!Add
  if (argv.add) {
    await Add(argv);
  }
  //!List
  else if (argv.list) {
    await List(argv);
  }
  //!Remove
  else if (argv.remove) {
    await Remove(argv);
  }

  //!Update
  else if (argv.update) {
    await Update(argv);
  }
})();

// *useful link
// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
