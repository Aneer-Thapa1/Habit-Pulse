const db = require("../config/dbConfig");

const addBlog = (req, res) => {
  const { blogTitle, blogCategory, blogDescription, user_id } = req.body;
};

module.exports = {
  addBlog,
};
