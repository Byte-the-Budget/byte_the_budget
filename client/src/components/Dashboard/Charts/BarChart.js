import React from 'react';
import { Bar } from "react-chartjs-2";

const BarChart = () => {

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data1 = [4000, 3200, 4200, 6000, 5000, 4300, 3000]
  const data2 = [4000, 3200, 4200, 6000, 5000, 4300, 3000]
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: data2,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
    }
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;

