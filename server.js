// import packages
const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const hbs = exhbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// import my modules
const routes = require('./controllers');
const sequelize = require('./config/connection');

// define instance
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: '3 small dogs',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// middleware
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