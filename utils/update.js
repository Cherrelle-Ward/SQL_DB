const { sequelize } = "sequelize";
require("../connection");
const argv = require("yargs");
const { Actor, Movie, Genre } = require("../models/");

const Update = async (argv) => {
  const updateMovie = await Movie.findOne({
    where: { [argv.key]: argv.value },
  });
  try {
    if (updateMovie) {
      if (argv.update) {
        const update = { [argv.key]: argv.value };
        const updated = await Movie.update(
          { [argv.key]: argv.newValue },
          { where: { [argv.key]: argv.value } }
        );
        const newUpdate = { [argv.key]: argv.newValue };

        console.log(update, "Original");
        console.log(newUpdate, "New Value");
      }
    } else if (!updateMovie) {
      console.log("Movie not in system");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = Update;
