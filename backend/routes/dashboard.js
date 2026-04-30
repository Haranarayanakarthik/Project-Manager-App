const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user.id });

  const overdue = tasks.filter(
    (t) => t.dueDate && t.dueDate < new Date() && t.status !== "done",
  );

  res.json({
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "done").length,
    overdue: overdue.length,
  });
});

module.exports = router;
