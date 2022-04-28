// add express , route to index.js within routes folder , create port for both heroku and or localhost 3001 , and finally express
const express = require('express');
const routes = require('./routes/index.js');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API routes
app.use(routes);

// Listens for the port 3001 
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);