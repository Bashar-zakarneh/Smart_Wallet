import React from "react";

const AdminPage = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "123-456-7890",
      birthdate: "1990-01-01",
      totalExpenses: "$1,200",
      totalIncome: "$3,000",
      walletBalance: "$1,800",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@gmail.com",
      phone: "987-654-3210",
      birthdate: "1985-05-12",
      totalExpenses: "$2,500",
      totalIncome: "$4,000",
      walletBalance: "$1,500",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@gmail.com",
      phone: "555-123-4567",
      birthdate: "1992-09-20",
      totalExpenses: "$900",
      totalIncome: "$2,500",
      walletBalance: "$1,600",
    },
    {
      id: 4,
      name: "Bashar",
      email: "bashar@gmail.com",
      phone: "987-123-4567",
      birthdate: "1997-09-20",
      totalExpenses: "$350",
      totalIncome: "$1,500",
      walletBalance: "$1,550",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-blue-600 text-white py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Smart Wallet - Admin Dashboard</h1>
          <nav>
            <button
              className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              onClick={() => (window.location.href = "/")}
            >
              Log Out
            </button>
          </nav>
        </div>
      </header>

      <main className="px-6 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Registered Users
        </h2>

        {/* Table container with horizontal scrolling for small screens */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-4 py-2 border border-gray-300">Name</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Phone</th>
                <th className="px-4 py-2 border border-gray-300">Birthdate</th>
                <th className="px-4 py-2 border border-gray-300">
                  Total Expenses
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  Total Income
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  Wallet Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="text-center bg-white hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border border-gray-300">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.phone}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.birthdate}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.totalExpenses}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.totalIncome}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.walletBalance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
