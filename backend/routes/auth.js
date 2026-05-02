const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Missing fields");
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).send("User already exists");
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
      role: role || "member"
    });

    res.json(user);

  } catch (err) {
    console.log("Signup error:", err);   // 🔥 IMPORTANT
    res.status(500).send(err.message);   // send real error
  }
});
