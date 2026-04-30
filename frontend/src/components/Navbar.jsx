export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#222",
        color: "white",
      }}
    >
      <a href="/dashboard" style={{ color: "white" }}>
        Dashboard
      </a>
      <a href="/projects" style={{ color: "white" }}>
        Projects
      </a>
      <a href="/tasks" style={{ color: "white" }}>
        Tasks
      </a>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}
