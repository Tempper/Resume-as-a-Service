import React from 'react';

const BUTTON_BASE_CLASSES = "bg-blue-600 text-left hover:bg-blue-700 hover:brightness-110 px-3 py-2 rounded-lg transition";

const menuItems = [
  { label: "Overview", value: "overview", className: BUTTON_BASE_CLASSES },
  { label: "Preview Resume", value: "preview", className: BUTTON_BASE_CLASSES },
  { label: "Export", value: "export", className: BUTTON_BASE_CLASSES },
  { label: "Settings", value: "settings", className: BUTTON_BASE_CLASSES },
];

export default function Sidebar({ onSelect }) {
  return (
    <aside className="w-56 bg-stone-400 text-white p-4 flex flex-col space-y-2">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {menuItems.map(({ label, value, className, ariaCurrent }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={className}
          aria-current={ariaCurrent ? "page" : undefined}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}