import React from "react";
import Header from "./Header";

const HomePage = () => {
  const transactions = [
    { id: 1, type: "Income", category: "Salary", amount: 1000 },
    { id: 2, type: "Expense", category: "Food", amount: 200 },
    { id: 3, type: "Expense", category: "Shopping", amount: 150 },
    { id: 4, type: "Income", category: "Freelancing", amount: 500 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Reusable Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center px-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
            Transactions
          </h2>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-left">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 border border-gray-200">Type</th>
                  <th className="px-4 py-2 border border-gray-200">Category</th>
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
      </main>
    </div>
  );
};

export default HomePage;
