import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    phone: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("Registered User Details:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        className="w-full max-w-lg bg-white shadow-lg rounded-lg px-10 py-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          Register
        </h2>
        {error && (
          <p className="mb-4 text-red-600 text-center text-sm">{error}</p>
        )}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Birthdate
          </label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm your password"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            User Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
        <p className="mt-6 text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
