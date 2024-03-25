import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({categories, expenses}) => {
  console.log(categories)
  const data = {
    labels: categories,
    datasets: [
      {
        data: expenses,
        backgroundColor: ["#EA334B", "#3070F5", "#57BEB5", "#AE59DC", "#F5C242", "#5B61D6", "#F2A73B"]
      }
    ]
  };

  const options = {
    cutout: "60%",
    aspectRatio: 2,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'right', 
      }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;