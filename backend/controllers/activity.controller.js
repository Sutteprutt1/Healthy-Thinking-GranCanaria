const db = require("../models/index.js");
const Activity = db.activity;
const Op = db.Sequelize.Op;
const fs = require("fs");
const imagePath = "public/images/";

// Create and Save a new activity
exports.create = (req, res) => {

  // Validate request
  if (!req.body.name || !req.body.location || !req.body.paid || !req.body.description || !req.file) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a Activity
  const activity = {
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    paid: req.body.paid,
    time: req.body.time,
    filename: req.file ? req.file.filename : ""
  }

  // Save Activity in the database
  Activity.create(activity).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the activity"
    })
  });
};

// Retrieve all activities from the database.
exports.findAll = (req, res) => {
  Activity.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all activities"
    })
  })
};

// Find a single Activity with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Activity.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find activity with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving activity with id=" + id
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  var filename = '';
  // Validate request
  if (!req.body.name || !req.body.location || !req.body.paid || !req.body.description) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  Activity.findByPk(id).then(data => {
    filename = data.filename;

    // Create a activity
    const activity = {
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      paid: req.body.paid,
      time: req.body.time,
      filename: req.file ? req.file.filename : filename
    }

    Activity.update(activity, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          if (req.file && (filename != '')) {
            fs.unlinkSync(imagePath + filename);
          }
          res.send({
            message: "Activity was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update activity with id=${id}. Maybe activity was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating activity with id= " + id,
        });
        console.log(err);
      });
  })
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;
  var filename = "";
  Activity.findByPk(id).then(data => {
    filename = data.filename

    Activity.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          fs.unlinkSync(imagePath + filename);
          res.send({
            message: "Activity was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete activity with id=${id}. Maybe activity was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete activity with id=" + id
        });
      });
  }).catch(err => {
    res.status(500).send({
      message: "Could not delete activity with id=" + id
    });
  });;
};