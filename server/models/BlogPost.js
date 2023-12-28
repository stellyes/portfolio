const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
      type: String,
      required: true,
      trim: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
