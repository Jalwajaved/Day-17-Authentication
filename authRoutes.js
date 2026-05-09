const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("./authController");

// POST /api/auth/register
router.post("/register", registerUser);

// POST /api/auth/login
router.post("/login", loginUser);

module.exports = router;
