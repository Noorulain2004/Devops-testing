import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("token")) ? "User" : "Guest";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to your Dashboard 🎉
      </h1>
      <p className="text-gray-600">You are logged in as {user}</p>
    </div>
  );
};

export default Dashboard;
