const User = require('./User');
const Post = require('./Post');

// user has posts, each post belongs to a user
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };