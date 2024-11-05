const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require('bcryptjs');
const { getToken } = require("../utils/helpers");

//SignUP - Create User

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(403).json({ error: "A user with this email already exists" });
    }

    // Generate a salt and hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    // Create a new user
    const newUserData = {
      email,
      password: hashPassword,
      firstName,
      lastName,
      username,
    };
    const newUser = await User.create(newUserData);

    // Generate and attach a token to the user
    const token = await getToken(email, newUser);

    // Prepare the response data
    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;

    // Return the result to the user
    return res.status(200).json(userToReturn);
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;


//LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ err: "Invalid credentials" });
  }

  // console.log("Password:", password);
  // console.log("User Password:", user.password);

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).json({ err: "Invalid credentials pa" });
  }

  const token = await getToken(user.email, user);
  const userToReturn = { ...user.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

module.exports = router;
