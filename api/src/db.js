// requires / imports
require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const modelChampions = require("./models/champions.js");
const modelRoles = require("./models/roles.js");

//instancia de Sequelize
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/characters`
);

modelChampions(sequelize);
modelRoles(sequelize);

const { Champion, Role } = sequelize.models;

Champion.belongsToMany(Role, { through: "ChampionxRole" });
Role.belongsToMany(Champion, { through: "ChampionxRole" });

console.log(Champion, Role);

module.exports = {
  ...sequelize.models,
  db: sequelize,
  Op,
};
