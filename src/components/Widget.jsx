import React from "react";
import { useDashboard } from "../context/DashboardContext";

const Widget = ({ widget, category }) => {
  const { removeWidget } = useDashboard();

  return (
    <div className="bg-white p-4 shadow rounded relative">
      <button
        className="absolute top-1 right-1 text-red-500"
        onClick={() => removeWidget(category, widget.id)}>
        ×
      </button>
      <h3 className="font-bold text-lg">{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;