// import packages
const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// import my modules
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// define instance
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: '3 small dogs',
    cookie: {
        // maxAge: 15 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// middleware
const hbs = exhbs.create({ helpers });
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));


// turn on routes
app.use(routes);

// initiate connection to DB, start server
sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    });