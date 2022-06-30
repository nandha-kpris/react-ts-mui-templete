import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';
import { CategoryScale, LinearScale, registerables } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, ...registerables);
function BarChat() {
  const datas = [
    {
      useGain: 1000,
    },
    {
      useGain: 3000,
    },
    {
      useGain: 2000,
    },
    {
      useGain: 1000,
    },
    {
      useGain: 400,
    },
    {
      useGain: 9000,
    },
    {
      useGain: 2000,
    },
    {
      useGain: 200,
    },
    {
      useGain: 1000,
    },
    {
      useGain: 200,
    },
    {
      useGain: 7000,
    },
    {
      useGain: 1000,
    },
  ];
  const [useData, setUseData] = useState({
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Closebi',
        data: datas.map((val: any) => val.useGain),
        backgroundColor: ['#9b51e0', '#8ed1fc', '#f78da7', '#fcb900'],
      },
    ],
  });

  return (
    <div>
      <Bar data={useData} />
    </div>
  );
}

export default BarChat;
