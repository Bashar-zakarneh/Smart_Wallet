import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define credentials
    const validUserEmail = "bashar@gmail.com";
    const validUserPassword = "123456";
    const adminEmail = "admin@gmail.com";
    const adminPassword = "123456";

    if (email === adminEmail && password === adminPassword) {
      // Navigate to AdminPage if admin credentials are correct
      setError("");
      navigate("/admin");
    } else if (email === validUserEmail && password === validUserPassword) {
      // Navigate to HomePage if user credentials are correct
      setError("");
      navigate("/home");
    } else {
      // Show error message if credentials are invalid
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        className="w-full max-w-lg bg-white shadow-lg rounded-lg px-10 py-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          Login
        </h2>
        {error && (
          <p className="mb-4 text-red-600 text-sm text-center">{error}</p>
        )}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
        <p className="mt-6 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
