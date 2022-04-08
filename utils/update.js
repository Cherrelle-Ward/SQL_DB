const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const Actor = require("../models/actor");
const Genre = require("../models/genre");
const Movie = require("../models/movie");

const Update = async (argv) => {
  if (argv.update) {
    const update = { [argv.key]: argv.value };
    const updated = await Genre.update(
      { [argv.key]: argv.newValue },
      { where: { [argv.key]: argv.value } }
    );

    console.log(updated);
  } else {
    console.log("nothing to update");
  }
};

module.exports = Update;
