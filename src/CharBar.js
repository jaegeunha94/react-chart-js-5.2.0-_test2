import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    x: {
      grid: {
        offset: true,
        // offset: false,
      },
    },
  },
  y: {
    grid: {
      // offset: true,
      offset: false,
    },
  },
};

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [2000, 1250, 1750, , 10, 1000, 2250, 2400],
      // data: [2000, 1250, 1750, , -10, 1000, 2250, 2400],
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // hoverBackgroundColor: 'blue',
      // borderSkipped: 'true',
      // borderSkipped: 'middle',
      // borderSkipped: 'bottom',
      // borderWidth: 5,
      // borderRadius: 5,
      // barThickness: 48,
      // minBarLength: 20,
      pointStyle: 'line',
    },
    {
      label: 'Dataset 2',
      data: [2000, 1250, 1750, , 1000, 2250, 2400],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      pointStyle: 'line',
    },
  ],
};

export default function CharBar() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
