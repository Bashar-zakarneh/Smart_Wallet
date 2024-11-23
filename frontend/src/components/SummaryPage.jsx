import React from "react";
import Header from "./Header";

const SummaryPage = () => {
  // Dummy transaction data
  const transactions = [
    { id: 1, type: "Income", category: "Salary", amount: 1000 },
    { id: 2, type: "Expense", category: "Food", amount: 200 },
    { id: 3, type: "Expense", category: "Shopping", amount: 150 },
    { id: 4, type: "Income", category: "Freelancing", amount: 500 },
  ];

  // Calculate totals
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const walletBalance = totalIncome - totalExpenses;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Reusable Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center px-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
            Wallet Summary
          </h2>

          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-100 p-4 rounded shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Total Income</h3>
              <p className="text-2xl text-green-600 font-bold">
                ${totalIncome}
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow-md">
              <h3 className="text-xl font-bold text-blue-600">
                Total Expenses
              </h3>
              <p className="text-2xl text-red-600 font-bold">
                ${totalExpenses}
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow-md">
              <h3 className="text-xl font-bold text-blue-600">
                Wallet Balance
              </h3>
              <p className="text-2xl text-gray-700 font-bold">
                ${walletBalance}
              </p>
            </div>
          </div>

          {/* Transaction Details Table */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              Transaction Details
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-left">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-2 border border-gray-200">Type</th>
                    <th className="px-4 py-2 border border-gray-200">
                      Category
                    </th>
                    <th className="px-4 py-2 border border-gray-200">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-blue-50">
                      <td className="px-4 py-2 border border-gray-200">
                        {transaction.type}
                      </td>
                      <td className="px-4 py-2 border border-gray-200">
                        {transaction.category}
                      </td>
                      <td
                        className={`px-4 py-2 border border-gray-200 ${
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
        </div>
      </main>
    </div>
  );
};

export default SummaryPage;
