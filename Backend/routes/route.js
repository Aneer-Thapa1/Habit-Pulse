const { Router } = require("express");

const authRoute = require("../controllers/authController");
const blogRoute = require("../controllers/blogController");

// Authentication Route
router.get("/login", authRoute.login);
router.post("/signup", authRoute.signup);

// Blog Route
router.post("./addBlog", blogRoute.addBlog);
router.post("./addBlog", blogRoute.getBlog);
