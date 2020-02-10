const postQueries = {
  getPostListSQL() {
    return `SELECT *
            FROM post.post_list;`;
  },
  getAddPostSQL() {
    return `INSERT INTO post.post_list (
              post_title,
              post_description,
              post_image,
              date_created,
              date_modified)
            VALUES (?, ?, ?, NOW(), NULL)`;
  },
}

module.exports = postQueries;