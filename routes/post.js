const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');

// GET
router.get('/post-list', postController.getPostList);

// // POST
router.post('/add-post', postController.addPost);

// // PUT
// router.put('/edit-list', postController.editPost);

// // DELETE
// router.delete('/delete-list', postController.deletePost);

module.exports = router;