// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin','user'], default: 'admin' }
});

UserSchema.methods.setPassword = async function (pw) {
  this.passwordHash = await bcrypt.hash(pw, 12);
};

UserSchema.methods.validatePassword = function (pw) {
  return bcrypt.compare(pw, this.passwordHash);
};

module.exports = mongoose.model('User', UserSchema);
