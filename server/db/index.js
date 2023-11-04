const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
  });

const User = mongoose.model('User', userSchema);
  
  module.exports = {
    User,
  }