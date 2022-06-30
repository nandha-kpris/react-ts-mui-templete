import React from 'react';
import { Typography } from '@mui/material';
// import HomeTable from './homeTable';
import SecondHomeTable from './secondTable';
import Grid from '@mui/material/Grid';
import BarChat from './BarChat';
function Home() {
  return (
    <div>
      <Typography
        style={{
          color: 'red',
          fontSize: '25px',
          marginLeft: '200px',
        }}
      >
        <div style={{ width: '60%' }}>
          <BarChat />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {/* <HomeTable /> */}
          </Grid>
          <Grid item xs={4}>
            <SecondHomeTable />
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}

export default Home;
