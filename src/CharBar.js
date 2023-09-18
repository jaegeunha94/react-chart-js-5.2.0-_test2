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
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    // labels: {
    //   render: 'value',
    // },
    legend: {
      position: 'top',
      // position: 'bottom',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },

  // Axis
  x: {
    // alignToPixels: true,
    // backgroundColor: 'red',
    // border: ???,
    // display: true,
    // grid: ???,
    // min: 0,
    // max: 100,
    // reverse: true,
    // stacked: true,
    // suggestedMin: 0,
    // suggestedMax: 100,
    // ticks: ???,
    // weight: 0,
  },

  y: {
    // alignToPixels: true,
    // backgroundColor: 'red',
    // border: ???,
    // display: true,
    // grid: ???,
    // min: 0,
    // max: 100,
    // reverse: true,
    // stacked: true,
    // suggestedMin: 0,
    // suggestedMax: 100,
    // ticks: ???,
    // weight: 0,
  },

  // Scale
  scales: {
    x: {
      grid: {
        // offset: false,
      },
    },
  },
  y: {
    grid: {
      // offset: false,
    },
  },
};

const data = {
  labels: ['CPU', 'Memory', 'Disk', 'DiskIO', 'Inlet', 'Inside', 'Outlet'],
  datasets: [
    {
      data: [2000, 1250, 1750, , 10, 1000, 2250, 2400],
      label: 'Host 1',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      xAxisId: 'x-axis1',
      yAxisId: 'y-axis1',

      // 1. general
      // base: 100,
      // clip: 10000,    *
      // grouped: false,
      // indexAxis: 'y',
      // order: 2,
      // skipNull: true,
      // skipNull: false,
      //3. Styling
      // data: [2000, 1250, 1750, , -500, 1000, 2250, 2400],
      // borderSkipped: 'top',
      // borderSkipped: 'middle',
      // borderSkipped: 'bottom',
      // borderWidth: 5,
      // borderRadius: 5,
      // minBarLength: 20,
      // pointStyle: 'crossRot',
      //4. Intercation
      // hoverBackgroundColor: 'blue',
      // hoverBorderColor: 'blue',
      // hoverBorderWidth: 1,
      // hoverBorderRadius: 5,
      //5. ETC
      // barThickness: 48,
      // barPercentage: 0.8,
      // categoryPercentage: 0.6,
      // maxBarThickness: 1,
    },
    {
      data: [200, 125, 170, , 100, 250, 240],
      label: 'Host 2',
      backgroundColor: 'blue',
      borderColor: 'blue',
      xAxisId: 'x-axis1',
      yAxisId: 'y-axis1',

      // 1. general
      // base: 100,
      // clip: 10000,
      // grouped: false,
      // indexAxis: 'y',
      // order: 2,
      // skipNull: true,
      // skipNull: false,
      // data: [2000, 1250, 1750, , -10, 1000, 2250, 2400],
      //3. Styling
      // borderSkipped: 'true',
      // borderSkipped: 'middle',
      // borderSkipped: 'bottom',
      // borderWidth: 5,
      // borderRadius: 5,
      // minBarLength: 20,
      pointStyle: 'crossRot',
      //4. Intercation
      // hoverBackgroundColor: 'blue',
      // hoverBorderColor: 'blue',
      // hoverBorderWidth: 1,
      // hoverBorderRadius: 5,
      //5. ETC
      // barThickness: 48,
      // barPercentage: 1,
      // categoryPercentage: 1,
      // maxBarThickness: 1,
    },
    {
      label: 'Host 3',
      data: [3000, 3250, 3750, 300, 3000, 3250, 3400],
      backgroundColor: 'green',
      borderColor: 'green',
      xAxisId: 'x-axis2',
      yAxisId: 'y-axis2',

      // 1. general
      // base: 100,
      // clip: 10000,
      // grouped: false,
      // indexAxis: 'y',
      // order: 2,
      // skipNull: true,
      // skipNull: false,
      // data: [2000, 1250, 1750, , -10, 1000, 2250, 2400],
      //3. Styling
      // borderSkipped: 'true',
      // borderSkipped: 'middle',
      // borderSkipped: 'bottom',
      // borderWidth: 5,
      // borderRadius: 5,
      // minBarLength: 20,
      pointStyle: 'crossRot',
      //4. Intercation
      // hoverBackgroundColor: 'blue',
      // hoverBorderColor: 'blue',
      // hoverBorderWidth: 1,
      // hoverBorderRadius: 5,
      //5. ETC
      // barThickness: 48,
      // barPercentage: 1,
      // categoryPercentage: 1,
      // maxBarThickness: 1,
    },
    {
      label: 'Host 4',
      data: [1000, 1250, 1750, 100, 2000, 2250, 400],
      backgroundColor: 'orange',
      borderColor: 'orange',
      xAxisId: 'x-axis2',
      yAxisId: 'y-axis2',
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
