const { body } = require('express-validator');

module.exports = app => {
    const eventController = require("../controllers/event.controller");
    var router = require("express").Router();

    // POST /events: Create a new event
    router.post("/", [
        body('title').notEmpty().withMessage('Title cannot be empty'), body('start_time').notEmpty().withMessage('Start time cannot be empty').isISO8601().withMessage('Invalid start time'),
        body('end_time').notEmpty().withMessage('End time cannot be empty').isISO8601().withMessage('Invalid end time'),
    ], eventController.create);


    // GET /events: Retrieve all events
    router.get("/", eventController.findAll);

    // GET /events/:id: Retrieve a single event by its event_id
    router.get("/:id", eventController.findOne);

    // PUT /events/:id: Update an existing event by its event_id
    router.put("/:id", eventController.update);

    // DELETE /events/:id: Delete an existing event by its event_id
    router.delete("/:id", eventController.delete);

    app.use('/api/events', router);
}

