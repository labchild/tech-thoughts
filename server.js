// import packages
const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const hbs = exhbs.create({});

// import my modules
const routes = require('./controllers');
const sequelize = require('./config/connection');

// define instance
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);
// get static files
app.use(express.static(path.join(__dirname, 'public')));

// initiate connection to DB, start server
sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    });