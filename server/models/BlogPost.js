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
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
