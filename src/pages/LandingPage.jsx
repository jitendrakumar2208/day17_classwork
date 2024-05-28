import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-slate-500 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-xl mb-8">The best app for all your needs.</p>
      <div>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
