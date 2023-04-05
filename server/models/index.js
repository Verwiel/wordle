const config = require("../config/db.config.js")
const { Sequelize } = require("sequelize")

// const sequelize = new Sequelize(
//   config.DB,
//   config.USER,
//   config.PASSWORD,
  
//   {
//     host: config.HOST,
//     dialect: config.dialect,
//     logging: false,
//     // idle_timeout: 7200
//     ssl: true,
//     pool: {
//       max: config.pool.max,
//       min: config.pool.min,
//       acquire: config.pool.acquire,
//       idle: config.pool.idle
//     }
//   }
// )

const sequelize = new Sequelize(config.DATABASE_URL)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("./user.model.js")(sequelize, Sequelize)
db.role = require("./role.model.js")(sequelize, Sequelize)
db.word = require("./word.model.js")(sequelize, Sequelize)
db.game = require("./game.model.js")(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
})

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
})

db.game.belongsTo(db.user)
db.user.hasMany(db.game)

db.ROLES = ["user", "admin", "moderator"]

module.exports = db
