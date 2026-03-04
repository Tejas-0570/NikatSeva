const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select : false // Don't return password by default
  },
  socketId:{
    type: String,
    default: null
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  return token;
};

userSchema.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

const User = mongoose.model('User', userSchema);

module.exports = User;