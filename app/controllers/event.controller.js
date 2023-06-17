const db = require("../models");
const Event = db.events;
const { Op } = db.Sequelize.Op;
const { validationResult } = require('express-validator');


// Create and Save a new Event
exports.create = (req, res) => {

  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }

  // Create an Event object
  const event = {
    title: req.body.title,
    description: req.body.description,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    location: req.body.location,
    // created_at and updated_at will be auto-generated
  };

  // Save Event in the database
  Event.create(event)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Some error occurred while creating the Event.",
      });
    });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  Event.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving events.",
      });
    });
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Event.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Event with id ${id} was not found.` });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || `Error retrieving Event with id ${id}.`,
      });
    });
};

// Update an Event by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Event.update(req.body, {
    where: { event_id: id },
  })
    .then((result) => {
      if (result[0] === 1) {
        res.send({ message: "Event was updated successfully." });
      } else {
        res.status(404).send({ message: `Event with id ${id} was not found or the request body was empty.` });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || `Error updating Event with id ${id}.`,
      });
    });
};

// Delete an Event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Event.destroy({
    where: { event_id: id },
  })
    .then((result) => {
      if (result === 1) {
        res.send({ message: "Event was deleted successfully." });
      } else {
        res.status(404).send({ message: `Event with id ${id} was not found.` });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || `Error deleting Event with id ${id}.`,
      });
    });
};
