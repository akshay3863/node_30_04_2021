const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: Number,
  birthdate: Date,
});

module.exports = mongoose.model("user",user_schema);