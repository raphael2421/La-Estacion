// imports
const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
   title: {
      type: String
   },
   content: {
      type: String
   },
   img: {
      mimetype: String,
      small: String,
      large: String,
   },
   author: {
      type: String
   },
   url: {
      type: String,
   },
   tags: [String],
   status: {
      type: String,
      enum: ['draft', 'published', 'trash', 'private']
   },
   date: {
      type: Date, default: Date.now
   },
});
// indexes

// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;