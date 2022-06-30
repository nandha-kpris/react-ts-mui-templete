import React from 'react';
import { Typography } from '@mui/material';
import LineChart from './LineChart';

function DashBoard() {
  return (
    <div>
      <div
        style={{
          color: 'red',
          fontSize: '25px',
          marginLeft: '200px',
        }}
      >
        <LineChart />
      </div>
    </div>
  );
}

export default DashBoard;
