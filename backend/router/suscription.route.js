module.exports = app => {
  const suscriptions = require("../controllers/suscription.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", suscriptions.create);

  // Retrieve all User
  router.get("/", suscriptions.findAll);
  
  // Retrieve a single User with id
  router.get("/:id", suscriptions.findOne);

  router.get("/filterByUserId/:id", suscriptions.findActivitiesByUserId);

  // Update a User with id
  router.put("/:id", suscriptions.update);

  // // Delete a User with id
  router.delete("/:id", suscriptions.delete);

  app.use('/api/suscriptions', router);
};