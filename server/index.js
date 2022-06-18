const express = require('express');
const registerRoutes = require('./routing');
const { registerMiddlewares } = require('./middlewares');

// Make a express app.
const app = express();
// We are going to use the port 3000.
const port = process.env.PORT || 3000;

// first step, routes registration.
registerRoutes(app)

// Second step, register middlewares.
registerMiddlewares(app);

// Start the server.
app.listen(port, () => {
    console.log(`The server is running at port: ${port}`);
})
