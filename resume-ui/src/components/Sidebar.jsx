import React from 'react';

const BUTTON_BASE_CLASSES = "bg-blue-600 text-left hover:bg-blue-700 hover:brightness-110 px-3 py-2 rounded-lg transition";

const menuItems = [
  { label: "Overview", value: "overview", className: BUTTON_BASE_CLASSES },
  { label: "Preview Resume", value: "preview", className: BUTTON_BASE_CLASSES },
  { label: "Export", value: "export", className: BUTTON_BASE_CLASSES },
  { label: "Settings", value: "settings", className: BUTTON_BASE_CLASSES },
];

export default function Sidebar({ onSelect, activeView, toggleTheme }) {
  return (
    <aside className="w-56 bg-stone-400 text-white p-4 flex flex-col h-full">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        {menuItems.map(({ label, value, className }) => (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`${className} ${activeView === value ? 'bg-blue-700 ring-2 ring-blue-300' : ''}`}
            aria-current={activeView === value ? "page" : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Toggle Theme Button pushed to bottom */}
      <button
        onClick={toggleTheme}
        className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
      >
        Toggle Theme
      </button>
    </aside>
  );
}