"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function SellerShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <SideBar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar onMenuClick={() => setMobileOpen(true)} />

        {/* Page Content */}
        <main className="flex-1 text-black overflow-y-auto pl-2 pr-6 py-4">
          {children}
        </main>
      </div>
    </div>
  );
}
