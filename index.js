// this to ensure env is setup
require("dotenv").config();
// const db = new Sequelize(process.env.MYSQL_URI);
// console.log(process.env);
const connection = require("./connection");
// !yargs
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const bcrypt = require("bcrypt");

// !model connections
const { Genre, Movie, Actor } = require("./models/");

//!Util Imports
const add = require("./utils/add");
const list = require("./utils/list");
const Remove = require("./utils/remove");
const Update = require("./utils/update");

// our main function - using await keyword hence async
(async () => {
  await connection.sync({ alter: true });
  //!Add
  if (argv.add) {
    await add(argv);
  }
  //!List
  else if (argv.list) {
    await list(argv);
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
