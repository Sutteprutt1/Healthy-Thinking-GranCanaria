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
    return;
  }

  // Create a Filter
  const filter = {
    name: req.body.name,
  }

  // Save Filter in the database
  Filter.create(filter).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the filter"
    })
  });
};

// Retrieve all Filters from the database.
exports.findAll = (req, res) => {
  Filter.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all filters"
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
          message: `Cannot find filter with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving filter with id=" + id
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
    return;
  }

  // Create a Filter
  const filter = {
    name: req.body.name,
  }

  Filter.update(filter, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Filter was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update filter with id=${id}. Maybe filter was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating filter with id=" + id
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
          message: `Cannot delete filter with id=${id}. Maybe filter was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete filter with id=" + id
      });
    });
};