import React from 'react';

import { Bar } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    datalabels: {
      color: 'red',
    },
    tooltip: {
      titleColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      bodyColor: 'green',
      displayColors: false,
      yAlign: 'bottom',
    },
  },
  scales: {
    xAxes: {
      grid: {
        lineWidth: 0.5,
        display: false,
        borderColor: 'transparent',
        tickColor: 'transparent',
      },
      ticks: {
        color: 'green',
        font: {
          size: 24,
        },
      },
    },
    yAxis: {
      beginAtZero: true,
      // offset: true,
      grid: {
        color: 'red',
        lineWidth: 0.5,
        tickColor: 'transparent',
        borderColor: 'transparent',
      },
      ticks: {
        color: 'red',
        font: {
          size: 24,
        },
      },
    },
  },
};

export const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [2000, 1250, 1750, 1000, 2250, 2400, 2500],
      label: '',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      hoverBackgroundColor: 'blue',
      borderRadius: 5,
      barThickness: 48,
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
