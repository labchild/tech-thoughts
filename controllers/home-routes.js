const router = require('express').Router();
const sequelize = require('sequelize');
const { Post, User, Comment } = require('../models');

// render homepage
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
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at', 'post_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPosts => {
            const posts = dbPosts.map(post => {
                return post.get({ plain: true });
            });
            res.render('homepage', { posts });
        })

});

module.exports = router;