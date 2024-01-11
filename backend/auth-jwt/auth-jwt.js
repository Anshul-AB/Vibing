const passport = require('passport');
require('dotenv').config();
const JwtStrategy = require("passport-jwt").Strategy;
const  ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require('../models/userSchema')

let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await User.findOne({ _id: jwt_payload.identifier });

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    }
  } catch (err) {
    return done(err, false);
  }
}));

module.exports = passport;
