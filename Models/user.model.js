const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "",
    required: true,
  },
  password: {
    type: String,
    default: "",
    required: true,
  },
  fase: {
    type: Number,
    default: 0,
  },
  world: {
    type: Number,
    default: 1,
  },
  experience: {
    type: Number,
    default: 0,
  },
  items: {
    cash: {
      type: Number,
      default: 0,
    },
    skins: {
      head: [String],
      armor: [String],
      shoes: [String],
      weapon: [String]
    },
  },
  usedItems: {
    head: String,
    genre: String,
    armor: String,
    eyeColor: String,
    shoes: String,
    hairColor: String,
    skinColor: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
