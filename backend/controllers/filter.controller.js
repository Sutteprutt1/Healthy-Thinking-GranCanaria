const db = require("../models/index.js");
const Filter = db.filter;
const Op = db.Sequelize.Op;

// Create and Save a new Filter
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Filter
  const Filter = {
    name: req.body.name,
  }

  // Save Filter in the database
  Filter.create(Filter).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Filter"
    })
  });
};

// Retrieve all Filters from the database.
exports.findAll = (req, res) => {
  Filter.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Activities"
    })
  })
};

// Find a single Filter with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  Filter.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Filter with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Filter with id=" + id
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Filter
  const Filter = {
    name: req.body.name,
  }

  Filter.update(Filter, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Filter was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Filter with id=${id}. Maybe Filter was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Filter with id=" + id
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Filter.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Filter was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Filter with id=${id}. Maybe Filter was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Filter with id=" + id
      });
    });
};