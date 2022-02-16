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
// use a query string? check in zookeepers (i think) for filter

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

// update a post title
router.put('/:id', (req, res) => {
    Post.update({
        post_title: req.body.post_title
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