/***
 * File name: index.js
 * Author's name: Nguyen Huynh Quang Vinh
 * StudentID: 301214805
 * Web App name: Car Shop
 */

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let car = require("../models/cars");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    cars: "",
  });
});

module.exports = router;
