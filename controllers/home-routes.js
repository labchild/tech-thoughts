const router = require('express').Router();
const sequelize = require('sequelize');
const { Post, User, Comment } = require('../models');

// render homepage
router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;