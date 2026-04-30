import { useState } from "react";
import API from "../api";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const login = async () => {
    try {
      const res = await API.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      window.location = "/dashboard";
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Typography variant="h4">Login</Typography>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <Button variant="contained" fullWidth onClick={login}>
        Login
      </Button>

      <p onClick={() => (window.location = "/signup")}>Create account</p>
    </Container>
  );
}
