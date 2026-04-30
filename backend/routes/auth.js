const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).send("User already exists");

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
      role: role || "member",
    });

    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("No user");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).send("Wrong password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
  );

  res.json({ token });
});

module.exports = router;
