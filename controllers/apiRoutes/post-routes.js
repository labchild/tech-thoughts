const router = require('express').Router();
const { Post, User, Vote, Comment } = require('../../models');
const sequelize = require('../../config/connection');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_title',
            'post_body',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at', 'post_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(posts => res.json(posts))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// get all of user's posts
// use a query string? check in zookeepers (i think) for filter

// get all votes for a post 
router.get('/votes/:id', (req, res) => {
    Vote.findAll({
        where: {
            post_id: req.params.id
        },
        include: {
            model: User,
            attributes: ['username']
        }
    })
    .then(postVotes => res.json(postVotes))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// get one post by id
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'post_title', 'post_body', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    })
        .then(post => {
            // if empty response, tell user post not found
            if (!post) {
                res.status(404).json({ message: `No post with id ${req.params.id}` });
                return;
            }
            // return found post record
            res.json(post);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// create a new post
router.post('/', (req, res) => {
    Post.create({
        post_title: req.body.post_title,
        post_body: req.body.post_body,
        user_id: req.body.user_id
    })
        .then(post => res.json(post))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// vote on a post
router.put('/upvote', (req, res) => {
    // custom static "upvote" method
    Post.upvote(req.body, { Vote, User })
        .then(votedPost => res.json(votedPost))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// update a post title
router.put('/:id', (req, res) => {
    Post.update({
        post_title: req.body.post_title,
        post_body: req.body.post_body
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(([result]) => {
            // if empty response, tell the user
            console.log(result);
            if (!result) {
                res.status(404).json({ message: `No post with id ${req.params.id}` });
                return;
            }
            // return success, changes made
            res.json({
                message: 'Post updated',
                changes: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// delete a post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            // if empty response, tell the user
            console.log(result);
            if (!result) {
                res.status(404).json({ message: `No post with id ${req.params.id}` });
                return;
            }
            // return success, changes made
            res.json({
                message: 'Post deleted',
                changes: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;