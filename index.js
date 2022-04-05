// npm install sequelize mysql2 yargs
//  npm install -y init
// npm install dotenv
// 4 things needed to set up

// line 7,8,9 do this to ensure env is setup
require("dotenv").config();
// const db = new Sequelize(process.env.MYSQL_URI);
// console.log(process.env);

const { Sequelize } = require("sequelize");

const connection = require("./connection");

// our main function - using await keyword hence async
(async () => {
  console.log("hello world");
})();
