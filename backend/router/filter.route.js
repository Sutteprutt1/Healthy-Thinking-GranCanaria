module.exports = app => {
  const filters = require("../controllers/filter.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", filters.create);

  // Retrieve all User
  router.get("/", filters.findAll);
  
  // Retrieve a single User with id
  router.get("/:id", filters.findOne);

  // Update a User with id
  router.put("/:id", filters.update);

  // // Delete a User with id
  router.delete("/:id", filters.delete);

  app.use('/api/filters', router);
};