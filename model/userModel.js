const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

//Create schema for CRUD operations
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provied a name']
  },

  dept: {
    type: String,
    required: [true, 'Please provied a dept']
  }
});


//craete model
const User = mongoose.model('User', userSchema);

//export User
module.exports = User;
