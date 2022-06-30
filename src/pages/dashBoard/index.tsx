import React from "react";
import { Divider, Typography } from "@mui/material";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Grid from "@mui/material/Grid";
import HomeTable from "./HomeTable";
import SecondHomeTable from "./SecondTable";
function DashBoard() {
  return (
    <div
      style={{
        color: "red",
        fontSize: "25px",
        marginLeft: "200px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LineChart />
        </Grid>
        <Grid item xs={6}>
          <BarChart />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={8}>
          <HomeTable />
        </Grid>
        <Grid item xs={4}>
          <SecondHomeTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoard;
