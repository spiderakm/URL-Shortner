const { Sequelize } = require("sequelize");
const createDB = new Sequelize("testdb","user","pass",{
  dialect:"sqlite",
  host:"./config/db.sqlite"
})


module.exports = createDB;