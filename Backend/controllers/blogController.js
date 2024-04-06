const db = require("../config/dbConfig");

// Controller to add blog

const addBlog = (req, res) => {
  try {
    const { blogTitle, blogCategory, blogDescription, user_id } = req.body;

    if (!blogTitle || !blogCategory || !blogDescription || !user_id) {
      return res.status(500).json({ error: "Please enter all details" });
    }

    const addBlogQuery = "INSERT INTO blogs SET ?";

    db.query(addBlogQuery, [blog], (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Internal server error!" });
      }

      res.status(200).json({ message: "Blog posted successfully!" });
    });
  } catch (error) {
    res.status().json({ error });
  }
};

// controller to add blog ends here

// controller to get blog starts here

const getBlog = (req, res) => {};

// controller to get blog ends here

module.exports = {
  addBlog,
  getBlog,
};
