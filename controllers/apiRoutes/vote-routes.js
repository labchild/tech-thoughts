const router = require('express').Router();
const { Post, User, Vote, Comment } = require('../../models');

// get all votes for a post 
router.get('/post/:id', (req, res) => {
    Vote.findAll({
        where: {
            post_id: req.params.id
        },
        include: {
            model: User,
            attributes: ['username']
        }
    })
    .then(userVotes => {
       console.log(userVotes);
       res.json(userVotes);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})