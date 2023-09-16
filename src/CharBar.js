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
      // position: 'bottom',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  // 2. Scale
  scales: {
    // xAxes: [
    //   {
    //     gridLines: {
    //       // offsetGridLines: false,  *
    //     },
    //   },
    // ],
    // yAxes: [
    //   {
    //     gridLines: {
    //       offsetGridLines: false,
    //     },
    //   },
    // ],
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
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [2000, 1250, 1750, , 10, 1000, 2250, 2400],
      label: 'Dataset 1',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      // 1. general
      // base: 100,
      // clip: 10000,    *
      // grouped: false,
      // indexAxis: 'y',
      // order: 2,
      // skipNull: true,
      // skipNull: false,
      // xAxisId: 'Wed',  *
      // yAxisId: 'id2',  *
      //3. Styling
      // data: [2000, 1250, 1750, , -500, 1000, 2250, 2400],
      // borderSkipped: 'top',
      // borderSkipped: 'middle',
      // borderSkipped: 'bottom',
      borderWidth: 5,
      // borderRadius: 5,
      // minBarLength: 20,
      // pointStyle: 'crossRot',  *
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
      label: 'Dataset 2',
      backgroundColor: 'blue',
      borderColor: 'blue',
      // 1. general
      // base: 100,
      // clip: 10000,
      // grouped: false,
      // indexAxis: 'y',
      // order: 2,
      // skipNull: true,
      // skipNull: false,
      // xAxisId: 'id1',
      // yAxisId: 'id2',
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
      label: 'Dataset 3',
      data: [3000, 3250, 3750, 300, 3000, 3250, 3400],
      backgroundColor: 'green',
      borderColor: 'green',
      // 1. general
      // base: 100,
      // clip: 10000,
      // grouped: false,
      // indexAxis: 'y',
      // order: 2,
      // skipNull: true,
      // skipNull: false,
      // xAxisId: 'id1',
      // yAxisId: 'id2',
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
  ],
};

export default function CharBar() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
