const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  Name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
  password: {
    type: String,
  },
  
  
});

module.exports = mongoose.model("data", userSchema);