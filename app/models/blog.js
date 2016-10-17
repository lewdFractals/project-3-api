'use strict';

const mongoose = require('mongoose');

// const post = new mongoose.Schema({
//   title: String,
//   content: String,
//   required: true,
// });

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // post: [post],
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

// blogSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
