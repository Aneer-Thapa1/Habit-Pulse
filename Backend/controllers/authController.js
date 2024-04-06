const db = require("../config/dbConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { user_name, user_email, password } = req.body;

    if (!user_name || !user_email || !password) {
      return res.status(400).json({ error: "Please fill all the fields!" });
    }

    const getUserQuery = "SELECT * FROM users WHERE user_email = ?";

    db.query(getUserQuery, [user_email], (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Internal Server Error!" });
      }

      if (result.length > 0) {
        return res
          .status(409)
          .json({ error: "User with this email already exists!" });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const newUser = {
        user_name: user_name,
        user_email: user_email,
        password: hashedPassword,
      };

      const insertUserQuery = "INSERT INTO users SET ?";

      db.query(insertUserQuery, [newUser], (insertError, insertResult) => {
        if (insertError) {
          return res.status(500).json({ error: "Internal Server Error" });
        } else {
          return res
            .status(201)
            .json({ message: "User signed up successfully" });
        }
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

const login = async (req, res) => {
  try {
    const { user_email, password } = req.body;

    if (!user_email || !password) {
      return res.status(400).json({ error: "Please fill all the fields!" });
    }

    const getUserQuery = "SELECT * FROM users WHERE user_email = ?";

    db.query(getUserQuery, [user_email], (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Internal Server Error!" });
      }

      if (result.length === 0) {
        return res
          .status(404)
          .json({ error: "User with this email is not registered!" });
      }

      const user = result[0];

      const isMatched = bcrypt.compareSync(password, user.password);
      if (!isMatched) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const token = jwt.sign({ userId: user.user_id }, "Habitpulsekey", {
        expiresIn: "2d",
      });

      return res.status(200).json({ message: "Login successful", token });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

module.exports = { signup, login };
