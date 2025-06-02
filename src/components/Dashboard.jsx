import React from "react";
import { useDashboard } from "../context/DashboardContext";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

const Dashboard = () => {
  const { data, search, setSearch } = useDashboard();

  return (
    <div>
      <input
        type="text"
        placeholder="Search Widgets"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      {data.map((category) => (
        <div key={category.category} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
          <AddWidgetForm category={category.category} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {category.widgets
              .filter((w) =>
                w.name.toLowerCase().includes(search.toLowerCase()) ||
                w.text.toLowerCase().includes(search.toLowerCase())
              )
              .map((widget) => (
                <Widget
                  key={widget.id}
                  widget={widget}
                  category={category.category}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;