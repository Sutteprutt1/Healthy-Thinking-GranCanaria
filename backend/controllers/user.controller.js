const db = require("../models/index.js");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a User
  const User = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    filename: req.file ? req.file.filename : ""
  }

  User.findOne({ where: { username: user.username } })
    .then(data => {
      if (data) {
        const result = bcrypt.compareSync(user.password, data.password);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);
        // get basic user details
        const userObj = utils.getCleanUser(data);
        // return the token along with user details
        return res.json({ user: userObj, access_token: token });
      }

      user.password = bcrypt.hashSync(req.body.password);

      // User not found. Save new User in the database
      User.create(user)
        .then(data => {
          const token = utils.generateToken(data);
          // get basic user details
          const userObj = utils.getCleanUser(data);
          // return the token along with user details
          return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Activities"
    })
  })
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a User
  const User = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    filename: req.file ? req.file.filename : ""
  }

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Find user by username and password
exports.findUserByUsernameAndPassword = (req, res) => {
  const username = req.body.username;
  const pwd = req.body.password;

  User.findOne({ where: { username: username, password: pwd } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};