const express = require('express');
const registerRoutes = require('./routing');
const { registerMiddlewares } = require('./middlewares');

// Load configuration
require('../config');

// Connect to the database
require("./db")


// Make a express app.
const app = express();
app.use(express.json());
// We are going to use the port 3000.
const port = process.env.PORT || 5000;

// first step, routes registration.
registerRoutes(app)

// Second step, register middlewares.
registerMiddlewares(app);

// Start the server.
app.listen(port, () => {
    console.log(`The server is running at port: ${port}`);
})
