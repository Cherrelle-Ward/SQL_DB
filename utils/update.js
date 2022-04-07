const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const Update = async (argv) => {
  if (argv.genre) {
    const updated = await Genre.update(
      { [argv.key]: argv.newValue },
      { where: { [argv.key]: argv.value } }
    );

    console.log(updated);
  }
};

module.exports = Update;
