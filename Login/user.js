const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

router.get("./login", (req, res) => {
  res.render("login");
});
router.post("/login", passport.authenticate('local',{
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
  }))