var mongoose = require("mongoose");

var gallerySchema = new mongoose.Schema({
  label: String,
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "images"
    }
  ]
});

module.exports = mongoose.model('gallery', gallerySchema);