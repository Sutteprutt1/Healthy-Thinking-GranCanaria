const db = require("../models/index.js");
const Category = db.category;
const Op = db.Sequelize.Op;

// Create and Save a new Category
exports.create = (req, res) => {
  // Validate request
  if (!req.body.filterId || !req.body.activityId) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Category
  const Category = {
    filterId: req.body.filterId,
    activityId: req.body.activityId,
  }

  // Save Category in the database
  Category.create(Category).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Category"
    })
  });
};

// Retrieve all Categorys from the database.
exports.findAll = (req, res) => {
  Category.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Activities"
    })
  })
};

// Find a single Category with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  Category.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Category with id=" + id
      });
    });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.filterId || !req.body.activityId) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Category
  const Category = {
    filterId: req.body.filterId,
    activityId: req.body.activityId,
  }

  Category.update(Category, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Category with id=" + id
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Category.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id
      });
    });
};