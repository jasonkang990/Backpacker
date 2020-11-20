let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  user: {type: String, required: true},
  salt: {type: String, required: true},
  pass: {type: String, required: true},
  joined: { type: Date, default: Date.now },
  highScore: {type: Number, default: 0},
  name: {type: String, default: ""}
});

module.exports = mongoose.model("User", UserSchema, "users");