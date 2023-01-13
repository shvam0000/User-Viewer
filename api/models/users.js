const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, require: true },
  email: { type: String, require: true },
  status: { type: String, require: true },
  role: { type: String, require: true },
  lastLogin: { type: String, require: true },
});

module.exports = mongoose.model('User', userSchema);
