const router = require('express').Router();
const { Comment } = require('../../models');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(comments => res.json(comments))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// create a comment
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
        .then(comment => res.json(comment))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

// delete a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            // if no change, tell the user they messed up
            console.log(result);
            if (!result) {
                res.status(404).json({ message: `No comment with id ${req.params.id}` });
                return;
            }
            // tell the user delete was success
            res.json({
                message: `Comment deleted`,
                changes: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;