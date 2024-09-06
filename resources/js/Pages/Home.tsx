import React from "react";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-5xl font-bold text-red-700">Welcome to Our Website</h1>
        <p className="text-xl">
          Explore our content and discover new experiences. We bring the best to
          you!
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 font-semibold text-blue-500 transition-all bg-white rounded-full shadow-md hover:bg-blue-500 hover:text-white">
            Get Started
          </button>
          <button className="px-6 py-3 font-semibold transition-all bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
