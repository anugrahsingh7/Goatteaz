const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true },
  publicId: { type: String, required: true }, // Cloudinary's public ID
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Video", videoSchema);
