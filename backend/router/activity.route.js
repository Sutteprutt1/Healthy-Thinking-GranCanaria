module.exports = app => {
  const activities = require("../controllers/activity.controller.js");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new User
  router.post("/", upload.single('filename'), activities.create);

  // Retrieve all User
  router.get("/", activities.findAll);
  
  // Retrieve a single User with id
  router.get("/:id", activities.findOne);

  // Update a User with id
  router.put("/:id", upload.single('filename'), activities.update);

  // // Delete a User with id
  router.delete("/:id", activities.delete);

  app.use('/api/activities', router);
};