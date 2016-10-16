'use strict';

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
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
