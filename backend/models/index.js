const sequelize = require("../config/db");
const User = require("./User.js");
const Post = require("./Post.js");
const Like = require("./Like.js");

// User and Post Association
User.hasMany(Post, { foreignKey: "userId", as: "posts", onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: "userId", as: "postedBy" });

// Post and Like Association
Like.belongsTo(Post, { foreignKey: "postId", as: "post", onDelete: 'CASCADE' });
Post.hasMany(Like, { foreignKey: 'postId', as: "likes", onDelete: 'CASCADE' });



module.exports = {
    sequelize,
    Post,
    User,
    Like,
   
};
