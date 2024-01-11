const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./connection.js/connection');
const passport = require('./auth-jwt/auth-jwt');
//ROUTES PATH
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/song');
const playlistRoutes = require('./routes/playlist');

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('hello world');
})

//Routes Middleware
app.use('/auth', authRoutes);
app.use('/song', songRoutes);
app.use('/playlist', playlistRoutes);

// Use passport middleware
app.use(passport.initialize());

app.listen(port, ()=>{
    console.log(`Server is listening at port`, + port);
})