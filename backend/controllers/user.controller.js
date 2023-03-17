const db = require("../models/index.js");
const User = db.user;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const fs = require("fs");
const imagePath = "public/images/";

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    filename: req.file ? req.file.filename : ""
  }

  User.findOne({ where: { email: user.email } })
    .then(data => {
      if (data) {
        // const result = bcrypt.compareSync(user.password, data.password);
        // if (!result) return res.status(401).send('Password not valid!');
        // //generate token
        // var token = jwt.sign({ id: data.id }, process.env.JWT_SECRET, {
        //   expiresIn: 86400 // 24 hours
        // });

        // // get basic user details
        // const userObj = data;
        // // return the token along with user details
        // return res.json({ user: userObj, access_token: token });
        return res.status(401).send("Your email already exist.")
      }

      user.password = bcrypt.hashSync(req.body.password);

      // User not found. Save new user in the database
      User.create(user)
        .then(data => {
          //generate token
          var token = jwt.sign({ id: data.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
          });

          // get basic user details
          const userObj = data;
          // return the token along with user details
          return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
          });
        });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all users"
    })
  })
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  var filename = '';
  // Validate request
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  User.findByPk(id).then(data => {
    try {
      filename = data.filename;
    } catch {
      console.log('User has not an image saved');
    }

    // Create a User
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
      filename: req.file ? req.file.filename : filename
    }

    if (!bcrypt.compareSync(user.password, data.password)) {
      user.password = bcrypt.hashSync(req.body.password);
    }


    User.update(user, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          if (req.file && (filename != '')) {
            fs.unlinkSync(imagePath + filename);
          }
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
  }).catch(err => {
    res.send({
      message:
        err.message || "Some error occurred while retrieving user."
    });
  });
};

// Find user by username and password
exports.findUserByEmailAndPassword = (req, res) => {
  const email = req.body.email;
  const pwd = req.body.password;

  User.findOne({ where: { email: email, password: pwd } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;
  var filename = "";
  User.findByPk(id).then(data => {
    filename = data.filename ? data.filename : ''

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          if (filename != '') {
            fs.unlinkSync(imagePath + filename);
          }
          res.send({
            message: "User was deleted successfully!"
          })
        } else {
          res.send({
            message: `Cannot delete user with id=${id}. Maybe user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  });
};