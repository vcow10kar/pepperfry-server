const passport = require("passport");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("../models/user.model");
var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",  
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      console.log("Profile", profile);
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        image: profile.photos[0].value,
      };
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        } else {
          user = await User.create(newUser);
          return done(null, user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);


module.exports = passport;
