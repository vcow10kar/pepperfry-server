const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.model");

//auth with google;

router.get("/", passport.authenticate("google", { scope: ["email", "profile"] }));

//googleauth callback we will add redirect later

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/products",
  }),
  (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/delivery`);
  }
);

router.get("/getuser", (req, res) => {
  //console.log("User", req.user);
  res.send(req.user);
});

module.exports = router;
