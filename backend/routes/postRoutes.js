const express = require("express");
const router = express.Router();
const { createPost, validateCreatePost, getAllPost,likePost,unlikePost,getComments,addComment } = require("../controllers/postController.js");
const authorizeUser = require("../middlewares/authorizeUser.js");

router.post("/create", authorizeUser, validateCreatePost, createPost);
router.get("/getAll", getAllPost)
router.post("/like",authorizeUser,likePost)
router.post("/unlike",authorizeUser,unlikePost);
router.get("/getComments/:postId",getComments)
router.post("/addComments",authorizeUser,addComment)


module.exports = router