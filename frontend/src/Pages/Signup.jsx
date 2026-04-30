import { useState } from "react";
import API from "../api";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
} from "@mui/material";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
  });

  const signup = async () => {
    await API.post("/auth/signup", data);
    window.location = "/";
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Typography variant="h4">Signup</Typography>

      <TextField
        fullWidth
        label="Name"
        margin="normal"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

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

      <TextField
        select
        fullWidth
        margin="normal"
        value={data.role}
        onChange={(e) => setData({ ...data, role: e.target.value })}
      >
        <MenuItem value="member">Member</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </TextField>

      <Button variant="contained" fullWidth onClick={signup}>
        Signup
      </Button>
    </Container>
  );
}
