const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  try {
    const { title, description, imageUrl, content } = req.body;
    const newBlog = new Blog({ title, description, content, imageUrl });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const imageUrl = req.file
      ? `/public/uploads/${req.file.filename}`
      : req.body.imageUrl;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, content, imageUrl },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
