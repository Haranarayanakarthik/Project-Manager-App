import { useState, useEffect } from "react";
import API from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    API.get("/projects").then((res) => setProjects(res.data));
  }, []);

  const create = async () => {
    await API.post("/projects", { name });
    window.location.reload();
  };

  return (
    <div>
      <h2>Projects</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={create}>Create</button>

      {projects.map((p) => (
        <p key={p._id}>{p.name}</p>
      ))}
    </div>
  );
}
