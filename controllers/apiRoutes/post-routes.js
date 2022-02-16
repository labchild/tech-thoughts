const router = require('express').Router();
const { Post, User } = require('../../models');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'post_title', 'post_body', 'created_at'],
        order: [['created_at', 'DESC']],
        include: {
            model: User,
            attributes: ['username']
        }
    })
        .then(posts => res.json(posts))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// get all of user's posts
// use a query string?

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
})
// update a post title

// delete a post


module.exports = router;