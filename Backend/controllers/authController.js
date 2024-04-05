// importing required libraries
const db = require("../config/dbConfig");
const bcrypt = require("bcrypt");

// Controller for signup

const signup = async (req, res) => {
  try {
    const { user_name, user_email, password } = req.body;

    if (!user_name || !user_email || !password) {
      return res.status(400).json({ error: "Please fill all the fields!" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = {
      user_name: user_name,
      user_email: user_email,
      password: hashedPassword,
    };

    const insertUserQuery = "INSERT INTO users SET ?";

    db.query(insertUserQuery, [user], (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        return res.status(200).json({ message: "User signed up successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

// controller of signup ends here

// controller of login starts here

const login = async (req, res) => {
  try {
    const { user_email, password } = req.body;

    if (!user_email || !password) {
      return res.status(400).json({ error: "Please fill all the fields!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};