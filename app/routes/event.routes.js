module.exports = app => {
    const eventController = require("../controllers/event.controller");
    var router = require("express").Router();
    // POST /events: Create a new event
    router.post("/", eventController.create);
    
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

