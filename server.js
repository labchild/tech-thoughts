// import packages
const express = require('express');

// import my modules
const routes = require('./controllers');
const sequelize = require('./config/connection');

// define instance
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// initiate connection to DB, start server
sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    });