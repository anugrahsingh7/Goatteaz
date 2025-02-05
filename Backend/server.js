const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const connectDb = require("./db");
const app = express();
const blogRoute = require("./routes/blogRoutes");
const videoRoutes = require("./routes/videoRoutes");
connectDb();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // ✅ Set to frontend URL
    credentials: true, // ✅ Allow cookies & authorization headers
    methods: ["GET", "POST", "PATCH", "DELETE"], // ✅ Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allowed headers
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// API Routes
app.use("/api/videos", videoRoutes);
app.use("/api/blogs", blogRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
