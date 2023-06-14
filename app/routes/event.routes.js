const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");

// POST /events: Create a new event
router.post("/events", eventController.create);

// GET /events: Retrieve all events
router.get("/events", eventController.findAll);

// GET /events/:id: Retrieve a single event by its event_id
router.get("/events/:id", eventController.findOne);

// PUT /events/:id: Update an existing event by its event_id
router.put("/events/:id", eventController.update);

// DELETE /events/:id: Delete an existing event by its event_id
router.delete("/events/:id", eventController.delete);

module.exports = router;
