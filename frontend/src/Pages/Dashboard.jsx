import { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get("/dashboard").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <Grid container spacing={3} style={{ padding: "20px" }}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Tasks</Typography>
              <Typography>Total: {data.total}</Typography>
              <Typography>Completed: {data.completed}</Typography>
              <Typography>Overdue: {data.overdue}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Projects</Typography>
              <Typography>Manage your projects easily</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
