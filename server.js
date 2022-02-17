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
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get static files
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// initiate connection to DB, start server
sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    });