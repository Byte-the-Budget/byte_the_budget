import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const HalfDonutChart = ({budget, expense}) => {
  const data = {

    datasets: [{
      data: [budget, expense],
      backgroundColor: ["#FE9168", "#8DE4FF"],
    }]
  };

  const options = {
    circumference: 180,
    rotation: -90,
    cutout: "60%",
    aspectRatio: 2,
    plugins: {
      title: {
        display: false, 
      }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default HalfDonutChart;