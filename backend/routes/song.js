const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/songSchema");
const User = require("../models/userSchema");

// CREATE SONG

//middleware to check authentication
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //req.user gets the user because of passport.authenticate
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ err: "Insufficient details to create song" });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
  }
);

// *************GET SONGS *************//

// GET ALL THE SONGS I PUBLISHED

router.get(
  "/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // currentUser = req.user;
    //get all the songs where artist._id === req.user._id
    const songs = await Song.find({ artist: req.user._id }).populate(
      "artist"
    );
    return res.status(200).json({ data: songs });
  }
);

//GET ALL SONGS BY AN ARTIST

router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { artistId } = req.params;
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(301).json({ err: "Artist doesn't exist" });
    }
    const songs = await Song.find({ artist: artistId });
    return res.status(200).json({ data: songs });
  }
);

//GET ALL SONGS BY A SONG_NAME

router.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { songName } = req.params;

    // Create a case-insensitive regex for partial matching
    const regex = new RegExp(songName, "i");
    try {
      // Use regex in the query to perform pattern matching
      //$regex operator is a MongoDB operator that allows you to perform regular expression matching.
      const songs = await Song.find({ name: { $regex: regex } }).populate(
        "artist"
      );

      return res.status(200).json({ data: songs });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
