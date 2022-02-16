const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
        .then(users => res.json(users))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// create a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(user => {
        console.log('made it!');
        res.json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: err.message });
    });
});

module.exports = router;