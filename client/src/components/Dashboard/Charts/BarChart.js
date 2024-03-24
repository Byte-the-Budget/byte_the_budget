import React from 'react';
import { Bar } from "react-chartjs-2";

const BarChart = ({months, budget, expense}) => {  
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Budget',
        data: budget,
        backgroundColor: 'rgba(141, 228, 255, 0.75)',
      },
      {
        label: 'Expense',
        data: expense,
        backgroundColor: 'rgba(254, 145, 104, 0.75)',
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

