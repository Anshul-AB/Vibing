const express = require("express");
const router = express.Router();
const passport = require("passport");
const Playlist = require("../models/playlistSchema");
const User = require("../models/userSchema");
const Song = require("../models/songSchema");
const mongoose = require("mongoose");

//CREATE PLAYLIST
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
      return res.status(301).json({ err: "Insufficient Data" });
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      collaborators: [],
    };
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
  }
);

//GET A PLAYLIST BY ME
router.get(
  "/get/myplaylists",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId = req.user._id;

    //get playlist
    const playlists = await Playlist.find({ owner: artistId }).populate("owner");
    return res.status(200).json({ data: playlists });
  }
);

//GET A PLAYLIST BY ID
router.get(
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const playlistId = req.params.playlistId;

    //playlist exists?
    const playlist = await Playlist.findOne({ _id: playlistId }).populate({
      path:"songs",
      populate:{
        path:"artist"
      }
    })
    if (!playlist) {
      return res.status(301).json({ err: "Invalid ID" });
    }
    //get playlist
    return res.status(200).json(playlist);
  }
);

//GET A PLAYLIST CREATED BY AN ARTIST
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId = req.params.artistId;

    //artist exists?
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(301).json({ err: "Artist does not exist" });
    }

    //get playlist
    const playlists = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlists });
  }
);

//ADD A SONG TO A PLAYLIST
router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;

    //playlist exists?
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(301).json({ err: "Playlist does not exist" });
    }

    // console.log(typeof(playlist.owner));
    //we can't compare objects using '==' we use '.equals' instead

    //currentUser, owner or collaborator?
    if (
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      return res.status(400).json({ err: "Not Allowed" });
    }

    //song is valid?
    const song = await Song.findOne({ _id: songId });
    if (!song) {
      return res.status(304).json({ err: "Song does not exist " });
    }

    // //same song already added
    // const songObjectId = new mongoose.Types.ObjectId(songId); //this changes string into object

    // if (playlist.songs.equals(songObjectId)) {
    //   return res.status(400).json({ err: "This Song already exists" });
    // }

    //push and save in db
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
  }
);

module.exports = router;
