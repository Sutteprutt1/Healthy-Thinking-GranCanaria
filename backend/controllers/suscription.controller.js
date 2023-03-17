const db = require("../models/index.js");
const Suscription = db.suscription;
const Op = db.Sequelize.Op;
const Activity = db.activity;

// Create and Save a new Suscription
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.start_time ||
    !req.body.end_time ||
    !req.body.userId ||
    !req.body.activityId
  ) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a suscription
  const suscription = {
    userId: req.body.userId,
    activityId: req.body.activityId,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  };

  // Save suscription in the database
  Suscription.create(suscription)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the suscription",
      });
      console.log(err);
    });
};

// Retrieve all suscriptions from the database.
exports.findAll = (req, res) => {
  Suscription.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving all suscriptions",
      });
    });
};

// Find a single Suscription with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Suscription.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Suscription with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving suscription with id=" + id,
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (
    !req.body.start_time ||
    !req.body.end_time ||
    !req.body.userId ||
    !req.body.activityId
  ) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a Suscription
  const suscription = {
    userId: req.body.userId,
    activityId: req.body.activityId,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  };

  Suscription.update(suscription, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Suscription was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update suscription with id=${id}. Maybe suscription was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating suscription with id=" + id,
      });
    });
};

// Retrieve all suscriptions from the database order by user id.
exports.findActivitiesByUserId = (req, res) => {
  const userId = req.params.id;

  // Getting alL User's suscriptions
  Suscription.findAll({
    where: { userId: userId },
  })
    .then((subscriptions) => {
      // Getting all info about activities
      const activityPromises = subscriptions.map((subscription) => {
        return Activity.findByPk(subscription);
      });
      return Promise.all(activityPromises);
    })
    .then((activities) => {
      // Return activities
      res.send(activities);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: "Error retrieving activities for userId=" + userId,
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Suscription.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Suscription was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete suscription with id=${id}. Maybe suscription was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete suscription with id=" + id,
      });
    });
};
