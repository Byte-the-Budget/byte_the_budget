import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  const data = {
    datasets: [{
      data: [300, 50],
      backgroundColor: ["#FE9168", "#8DE4FF"],
    }]
  };

  const options = {
    cutout: "60%",
    aspectRatio: 2,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;