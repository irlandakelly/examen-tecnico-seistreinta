# examen-tecnico-seistreinta

# Event Management Application

This is an event management application built with Express.js and Angular.

## Description

The Event Management Application allows users to create, update, and delete events. It provides a simple and intuitive interface for managing events with features such as title, description, start time, end time, and location.

## Features

- Create a new event
- Update an existing event
- Delete an event
- View a list of all events
- View details of a specific event

## Technologies Used

- Backend: Express.js, Sequelize (with SQLite database)
- Frontend: Angular
- Database: SQLite

## Installation

1. Clone the repository:

  git clone https://github.com/your-username/event-management-app.git

2. Install dependencies for the backend:

  cd event-management-app/backend
  npm install

3. Start the backend server:

cd ../backend
node server.js

4. Open your browser and visit http://localhost:8080 to access the application.

API Endpoints

GET /api/events - Retrieve all events\
GET /api/events/:id - Retrieve a specific event by ID\
POST /api/events - Create a new event\
PUT /api/events/:id - Update an existing event\
DELETE /api/events/:id - Delete an event\

