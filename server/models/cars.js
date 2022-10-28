/***
 * File name: cars.js
 * Author's name: Nguyen Huynh Quang Vinh
 * StudentID: 301214805
 * Web App name: Car Shop
 */

let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    Carname: String,
    Category: String,
    Carmodel: String,
    Price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("Car", Car);
