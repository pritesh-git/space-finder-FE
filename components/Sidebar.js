"use client";

import { CreditCard, Home, LogOut, User, Users, Wrench, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isMobileOpen, setIsMobileOpen }) {
  const pathname = usePathname();

  const menuItems = [
    { id: "overall", label: "Overall", icon: Home, path: "/overall" },
    { id: "tenants", label: "Tenants", icon: Users, path: "/tenants" },
    { id: "payment", label: "Payment", icon: CreditCard, path: "/payment" },
    { id: "repairman", label: "Repairman", icon: Wrench, path: "/repairman" },
    { id: "profile", label: "My Profile", icon: User, path: "/profile" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static p-5 inset-y-0 left-0 transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 w-64 bg-white shadow-lg flex flex-col h-screen`}
      >
        <div className="border-b flex items-center justify-between">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl">Property</span>
          </div>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button className="flex items-center gap-3 px-8 py-4 text-gray-700 hover:bg-gray-100 border-t transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium cursor-pointer">Logout</span>
        </button>
      </div>
    </>
  );
}
