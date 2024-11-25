const UserCloth = require("../models/User");
const bcrypt = require("bcryptjs");
const express = require("express");
const crypto = require("crypto");

const router = express.Router();

// Регистрация пользователя
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserCloth.create({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

module.exports = router;
