const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    default: 0,
  },
  min_qty: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;