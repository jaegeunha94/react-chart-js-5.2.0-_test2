import React from 'react';

import { Line } from 'react-chartjs-2';

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
      data: [400, 450, 430, 300, 350, 400, 500],
      label: '',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      hoverBackgroundColor: 'blue',
      lineTension: 0,
      fill: true,
      cubicInterpolationMode: 'monotone',
      tension: 0.5,
      borderColor: '#000',
      pointRadius: 10,
      pointHoverRadius: 15,
    },
  ],
};

export default function CharLine() {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
