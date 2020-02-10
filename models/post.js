const pool = require('../util/database/pool');
const postQueries = require('../util/queries/post/post-queries');
const Errors = require('../util/helpers/errors'); 

module.exports = class Job {
  constructor(
    post_id, 
    post_title,
    post_description,
    post_image,
    date_created,
    date_modified
    ) {
      this.post_id = post_id;
      this.post_title = post_title;
      this.post_description = post_description;
      this.post_image = post_image;
      this.date_created = date_created;
      this.date_modified = date_modified;
  }

  async addPost() {
    try {
      if (!this.post_id) {
        const addPostSQL = postQueries.getAddPostSQL();

        const [newPost] = await pool.execute(addPostSQL, [
          this.post_title,
          this.post_description,
          this.post_image
        ]);
        
        return newPost;
      }
    } catch (err) {
      throw new Errors.InternalServerError(err);
    }
  }

  static async getPostList() {
    try {
      const postListSQL = postQueries.getPostListSQL();

      const [postList] = await pool.execute(postListSQL);
      
      return postList;
      
    } catch (err) {
      throw new Errors.InternalServerError(err);
    }
  }
};