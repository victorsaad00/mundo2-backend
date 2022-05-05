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
    defult: "",
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
  items: {
    cash: {
      type: Number,
      default: 0,
    },
    skins: {
      head: [String],
      armor: [String],
      legs: [String],
      weapon: [String],
    },
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
