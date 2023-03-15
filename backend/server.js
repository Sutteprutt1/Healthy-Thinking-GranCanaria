
const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express()

var corsOptions = {
  origin: "*",
};


app.use(cors(corsOptions))


app.use("/public", express.static("public"));


const db = require("./models")

// db.sequelize.sync();

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and re-sync db.")
})

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

// Activity route
require("./router/activity.route.js")(app)

// Filter route
require("./router/filter.route.js")(app)

// Suscription route
require("./router/suscription.route.js")(app)

// User route
require("./router/user.route.js")(app)

// Category route
require("./router/category.route.js")(app)

// simple route
app.get("/", (req, res) => {
  res.json({message: "Welcome to healthy thinking application."})
})

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {

console.log(`Server is running on port ${PORT}.`)
})

