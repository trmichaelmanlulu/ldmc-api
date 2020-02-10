const Post = require('../models/post');
const Errors = require('../util/helpers/errors');

function getPostInstance(req) {
  return new Post(
    req.body.post_id,
    req.body.post_title,
    req.body.post_description,
    req.body.post_image,
    req.body.date_created,
    req.body.date_modified
  );
}

exports.getPostList = async (req, res, next) => {
  try {
    const postData = await Post.getPostList();

    res.status(200).json({
      status: 'Success',
      result: postData
    });

  } catch (err) {
    Errors.errorHandler(err, res);
  }
};

exports.addPost = async (req, res, next) => {
  try {
    const newPost = getPostInstance(req);

    await newPost.addPost();

    res.status(200).json({
      status: 'Success',
      result: newPost
    });

  } catch (err) {
    Errors.errorHandler(err, res);
  }
};

exports.editPost = async (req, res, next) => {
  try {
    const updatedPost = getPostInstance(req);

    await updatedPost.updatePost();

    res.status(200).json({
      status: 'Success',
      result: updatedPost
    });

  } catch (err) {
    Errors.errorHandler(err, res);
  }
};


exports.deletePost = async (req, res, next) => {
  try {
    
  } catch (err) {
    Errors.errorHandler(err, res);
  }
};