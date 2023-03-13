module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const auth = require("../controllers/auth.controller.js");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Retrieve all User
  router.get("/", users.findAll);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update a User with id
  router.put("/:id", upload.single('filename'), auth.isAuthenticated, users.update);

  // Sign up
  router.post("/signup", users.create);

  // Sign in
  router.post("/signin", auth.signin);

  // // Delete a User with id
  router.delete("/:id", auth.isAuthenticated, users.delete);

  app.use('/api/users', router);
};