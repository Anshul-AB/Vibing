const jwt = require("jsonwebtoken");
require("dotenv").config();

tokenHandler = {};

tokenHandler.getToken = async (email, user) => {
  const token = jwt.sign({ identifier: user._id }, process.env.JWT_SECRET_KEY);
  return token;
};

module.exports = tokenHandler;
