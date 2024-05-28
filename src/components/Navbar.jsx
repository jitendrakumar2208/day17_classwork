import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          {" "}
          <Link to={"/"}>MyApp</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          {/* <a href="#about" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#login" className="text-white hover:text-gray-200">
            Login
          </a>
          <a href="#signup" className="text-white hover:text-gray-200">
            Sign Up
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
