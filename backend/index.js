const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./connection.js/connection");
const passport = require("./auth-jwt/auth-jwt");
const path = require('path');
//ROUTES PATH
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");

app.use(express.json());

// Apply CORS middleware
app.use(cors({
  origin: '*'
}));

const port = process.env.PORT || 5000;

const _dirname = path.resolve();

// Serve static files from the 'frontend/build' directory
app.use(express.static(path.join(_dirname, "/frontend/build")));

app.get("*", (req, res) => {
  // Handle all other routes by sending the 'index.html' file
  res.sendFile(path.join(_dirname, "frontend", "build", "index.html"));
});

//Routes Middleware
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Use passport middleware
app.use(passport.initialize());

app.listen(port, () => {
  console.log(`Server is listening at port ${port}` );
});
