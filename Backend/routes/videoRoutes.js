const express = require("express");
const router = express.Router();
const Video = require("../models/Video");
const cloudinary = require("../cloudinary");
const path = require("path");
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

// CREATE a video
router.post("/", upload.single("video"), async (req, res) => {
  try {
    console.log("File MIME type: ", req.file.mimetype);
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
    });

    const video = new Video({
      title: req.body.title,
      description: req.body.description,
      videoUrl: result.secure_url,
      publicId: result.public_id,
    });

    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// READ all videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a video
router.patch("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    video.title = req.body.title || video.title;
    video.description = req.body.description || video.description;
    await video.save();

    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a video
router.delete("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(video.publicId, {
      resource_type: "video",
    });

    // Delete from database
    await video.remove();
    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
