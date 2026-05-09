require("dotenv").config();
const express = require("express");
const connectDB = require("./configdb");

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./authRoutes"));

// Protected Route Example
const authMiddleware = require("./authMiddleware");

app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to dashboard 🎉",
    user: req.user
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});