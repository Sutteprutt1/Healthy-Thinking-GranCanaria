const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require("../models");
const User = db.user;

exports.signin = (req, res) => {

  const basicAuthData = req.headers.authorization.split('Basic ')[1]
  const decodedData = atob(basicAuthData);

  const email = decodedData.split(':')[0];
  const pwd = decodedData.split(':')[1];

  // return 400 status if username/password is not exist
  if (!email || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Email or Password required."
    });
  }

  // return 401 status if the credential is not match.
  User.findOne({ where: { email: email } })
    .then(data => {
      if (!bcrypt.compareSync(pwd, data.password)) {
        return res.status(401).send('Password not valid!');
      }

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
      res.status(404).send({
        message:
          err.message || "User is not register yet"
      });
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });
};

exports.isAuthenticated = (req, res, next) => {
  // check header or url parameters or post parameters for token
  // var token = req.body.token || req.query.token;
  var token = req.headers.authorization.split('Bearer ')[1];

  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required."
    });
  }
  // check token that was passed by decoding token using secret
  // .env should contain a line like JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) return res.status(401).json({
      error: true,
      message: "Invalid token."
    });

    User.findByPk(user.id)
      .then(data => {
        // return 401 status if the userId does not match.
        if (!user.id) {
          return res.status(401).json({
            error: true,
            message: "Invalid user."
          });
        }
        // get basic user details
        next();
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + user.id
        });
      });
  });
};