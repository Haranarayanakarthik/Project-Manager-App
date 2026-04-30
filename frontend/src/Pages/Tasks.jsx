import { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const create = async () => {
    if (!title) return alert("Enter task");

    try {
      await API.post("/tasks", {
        title,
        status: "todo",
      });

      setTitle("");
      fetchTasks(); // ✅ no reload
    } catch (err) {
      console.log(err);
      alert("Error creating task");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Tasks</h2>

        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={create}>Add</button>

        {tasks.map((t) => (
          <p key={t._id}>
            {t.title} - {t.status}
          </p>
        ))}
      </div>
    </>
  );
}
