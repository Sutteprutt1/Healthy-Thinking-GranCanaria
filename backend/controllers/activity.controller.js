const db = require("../models/index.js");
const Activity = db.activity;
const Op = db.Sequelize.Op;

// Create and Save a new Activity
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.location || !req.body.paid || !req.body.description || !req.body.filename) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
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

// Retrieve all Activitys from the database.
exports.findAll = (req, res) => {
  Activity.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Activitys"
    })
  })
};

// Find a single Activity with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  Activity.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Activity with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Activity with id=" + id
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.name || !req.body.location || !req.body.paid || !req.body.description || !req.body.filename) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
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

  Activity.update(activity, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Activity was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Activity with id=${id}. Maybe Activity was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Activity with id=" + id
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Activity.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Activity was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Activity with id=${id}. Maybe Activity was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Activity with id=" + id
      });
    });
};