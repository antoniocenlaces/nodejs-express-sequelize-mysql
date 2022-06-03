const dbConfig = require("../config/db.config.js");

// const cls = require("cls-hooked");
// const namespace = cls.createNamespace("....");
const {Sequelize} = require("sequelize");
// Sequelize.useCLS(namespace);
console.log(`db.Config.HOST= ${dbConfig.HOST}`);
console.log(`dbConfig.dialect= ${dbConfig.dialect}`);
console.log(`dbConfig.port= ${dbConfig.port}`);
const sequelize = new Sequelize('test', 'operador', 'NiotecOp15!', {
  host: '192.168.0.114',
  dialect: dbConfig.dialect,
  port: 3306
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
