const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/short-url";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB....");
});

db.on("disconnected", () => {
  console.log("Disconnected..... ");
});

db.on("error", (err) => {
  console.log("Error", err);
});

module.exports = db;
