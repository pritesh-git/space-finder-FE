"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-purple-100 to-blue-200">
          <div className="flex">
            <Sidebar
              isMobileOpen={isMobileOpen}
              setIsMobileOpen={setIsMobileOpen}
            />

            <div className="flex-1 min-h-screen flex flex-col">
              <Header
                userName="Vikash Kumar"
                userEmail="example@gmail.com"
                onMenuClick={() => setIsMobileOpen(true)}
              />
              <main className="p-4 md:p-6 flex-1">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
