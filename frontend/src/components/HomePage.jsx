import React from "react";
import Header from "./Header";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = () => {
  const transactions = [
    { id: 1, type: "Income", category: "Salary", amount: 1000 },
    { id: 2, type: "Expense", category: "Food", amount: 200 },
    { id: 3, type: "Expense", category: "Shopping", amount: 150 },
    { id: 4, type: "Income", category: "Freelancing", amount: 500 },
  ];

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const walletBalance = totalIncome - totalExpenses;

  // Chart Data
  const chartData = {
    labels: ["Income", "Expenses", "Wallet Balance"],
    datasets: [
      {
        label: "Amount",
        data: [totalIncome, totalExpenses, walletBalance],
        backgroundColor: ["#4CAF50", "#F44336", "#2196F3"],
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Reusable Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center px-6 py-8">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
          {/* Section with Table and Chart side by side */}
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
            Transactions & Overview
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Transaction Table */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Transactions
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-200 text-left">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-6 py-3 border border-gray-200 text-sm font-medium text-gray-600">
                        Type
                      </th>
                      <th className="px-6 py-3 border border-gray-200 text-sm font-medium text-gray-600">
                        Category
                      </th>
                      <th className="px-6 py-3 border border-gray-200 text-sm font-medium text-gray-600">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-blue-50">
                        <td className="px-6 py-4 border border-gray-200">
                          {transaction.type}
                        </td>
                        <td className="px-6 py-4 border border-gray-200">
                          {transaction.category}
                        </td>
                        <td
                          className={`px-6 py-4 border border-gray-200 ${
                            transaction.type === "Income"
                              ? "text-green-600 font-bold"
                              : "text-red-600 font-bold"
                          }`}
                        >
                          ${transaction.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Chart Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">
                Financial Overview
              </h3>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
