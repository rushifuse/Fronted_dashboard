import React, { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

const AddWidgetForm = ({ category }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const { addWidget } = useDashboard();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      addWidget(category, name, text);
      setName("");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-1/3"
        required
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-1/2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        + Add
      </button>
    </form>
  );
};

export default AddWidgetForm;