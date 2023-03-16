const dbConfig = require("../config/db.config.js")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  port: dbConfig.PORT,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("./user.model.js")(sequelize, Sequelize)
db.activity = require("./activity.model.js")(sequelize, Sequelize)
db.suscription = require("./suscription.model.js")(sequelize, Sequelize)
db.filter = require("./filter.model.js")(sequelize, Sequelize)
db.category = require("./category.model.js")(sequelize, Sequelize)

// One User is in many Suscription but one Suscription only has 1 User.
db.user.hasMany(db.suscription)
db.suscription.belongsTo(db.user)

// One Activity is in many Suscription but one Suscription only has 1 Activity.
db.activity.hasMany(db.suscription)
db.suscription.belongsTo(db.activity)

// One Activity is in many Suscription but one Suscription only has 1 Activity.
db.activity.hasMany(db.suscription)
db.suscription.belongsTo(db.activity)

// One Activity is in many categories but one categories only has 1 Activity.
db.activity.hasMany(db.category)
db.category.belongsTo(db.activity)

// One Activity is in many categories but one categories only has 1 Activity.
db.filter.hasMany(db.category)
db.category.belongsTo(db.filter)

module.exports = db
