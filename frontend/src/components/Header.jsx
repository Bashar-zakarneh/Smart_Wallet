// Header Component
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Smart Wallet</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/summary" className="hover:text-gray-200">
                Summary
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-gray-200">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
