const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Activity route
require("./router/activity.route.js")(app);

// Filter route
require("./router/filter.route.js")(app);

// Suscription route
require("./router/suscription.route.js")(app);

// User route
require("./router/user.route.js")(app);

// Category route
require("./router/category.route.js")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to healthy thinking application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});