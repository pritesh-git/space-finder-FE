"use client";

import { Menu } from "lucide-react";

export default function Header({ userName, userEmail, onMenuClick }) {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl md:text-2xl font-bold">
            Welcome, {userName}!
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
            <span>{userEmail}</span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {userName.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}
