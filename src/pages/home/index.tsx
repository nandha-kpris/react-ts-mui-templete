import React from 'react';
import { Typography } from '@mui/material';

function Home() {
  console.log('home page');
  return (
    <div>
      <Typography
        style={{
          color: 'red',
          fontSize: '25px',
          marginLeft: '100px',
          margin: '10px',
        }}
      >
        home
      </Typography>
    </div>
  );
}

export default Home;
