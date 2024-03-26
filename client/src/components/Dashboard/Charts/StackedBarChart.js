import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);

const BudgetChart = ({ data }) => {
  const chartData = {
    labels: [data.category],
    datasets: [
      {
        label: 'Amount Spent',
        data: [data.amountSpent],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Budget',
        data: [data.budget - data.amountSpent],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        display: false, 
        grid: {
          display: false,
        },
        min: 0,
        max: data.budget
      },
      y: {
        stacked: true,
        display: false, 
        grid: {
          display: false,
        },
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false
  };

  return <Bar data={chartData} options={options} />;
};

export default BudgetChart;