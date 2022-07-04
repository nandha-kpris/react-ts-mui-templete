import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';
import { CategoryScale, LinearScale, registerables } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, ...registerables);
function LineChart() {
  const datas = [
    {
      useGain: 0,
    },
    {
      useGain: 15,
    },
    {
      useGain: 10,
    },
    {
      useGain: 25,
    },
    {
      useGain: 20,
    },
    {
      useGain: 35,
    },
    {
      useGain: 30,
    },
    {
      useGain: 60,
    },
  ];
  const [useData, setUseData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'LineChart',
        data: datas.map((val: any) => val.useGain),
        borderColor: '#181C32',
      },
    ],
  });

  return (
    <div>
      <Line data={useData} />
    </div>
  );
}

export default LineChart;
