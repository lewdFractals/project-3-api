'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const pageSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sidebar: {
    type: String,
    required: false,
  },
  footer: {
    type: String,
    required: false,
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

pageSchema.plugin(uniqueValidator);

// pageSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
