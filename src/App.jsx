import React from "react";
import './index.css';

import Dashboard from "./components/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";

function App() {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1  className="text-2xl font-bold mb-4">Dynamic Dashboard</h1>
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;