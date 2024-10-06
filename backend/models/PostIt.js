const mongoose = require('mongoose');

const postItSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const PostIt = mongoose.model('PostIt', postItSchema);

module.exports = {PostIt};