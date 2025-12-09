"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AdminNavbar({ onMenuClick }) {
  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
          🔔
        </div>

        {/* Profile */}
        <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer">
          R
        </div>
      </div>
    </nav>
  );
}
