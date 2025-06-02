import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const DashboardContext = createContext();

const initialData = [
  {
    category: "CSPM Executive Dashboard",
    widgets: [
      { id: uuid(), name: "Widget 1", text: "Random Text 1" },
      { id: uuid(), name: "Widget 2", text: "Random Text 2" },
    ],
  },
];

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");

  const addWidget = (categoryName, name, text) => {
    const updatedData = data.map((cat) => {
      if (cat.category === categoryName) {
        return {
          ...cat,
          widgets: [...cat.widgets, { id: uuid(), name, text }],
        };
      }
      return cat;
    });
    setData(updatedData);
  };

  const removeWidget = (categoryName, id) => {
    const updatedData = data.map((cat) => {
      if (cat.category === categoryName) {
        return {
          ...cat,
          widgets: cat.widgets.filter((w) => w.id !== id),
        };
      }
      return cat;
    });
    setData(updatedData);
  };

  return (
    <DashboardContext.Provider
      value={{ data, addWidget, removeWidget, search, setSearch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);