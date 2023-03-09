const db = require("../models/index.js");
const Suscription = db.suscription;
const Op = db.Sequelize.Op;

// Create and Save a new Suscription
exports.create = (req, res) => {
  // Validate request
  if (!req.body.start_time || !req.body.end_time || !req.body.userId || !req.body.activityId) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Suscription
  const Suscription = {
    userId: req.body.userId,
    activityId: req.body.activityId,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  }

  // Save Suscription in the database
  Suscription.create(Suscription).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Suscription"
    })
  });
};

// Retrieve all Suscriptions from the database.
exports.findAll = (req, res) => {
  Suscription.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Activities"
    })
  })
};

// Find a single Suscription with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  Suscription.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Suscription with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Suscription with id=" + id
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.start_time || !req.body.end_time || !req.body.userId || !req.body.activityId) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Suscription
  const Suscription = {
    userId: req.body.userId,
    activityId: req.body.activityId,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  }

  Suscription.update(Suscription, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Suscription was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Suscription with id=${id}. Maybe Suscription was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Suscription with id=" + id
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Suscription.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Suscription was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Suscription with id=${id}. Maybe Suscription was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Suscription with id=" + id
      });
    });
};