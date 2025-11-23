"use client";

import Navbar from "@/components/layout/Navbar";
import SidebarSetting from "@/components/layout/SidebarSetting";
import clsx from "clsx";
import { useState } from "react";

export default function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Backdrop for mobile */}
        <div
          className={clsx(
            "fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden",
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        <aside
          className={clsx(
            "fixed lg:relative inset-y-0 left-0 z-50 w-[280px] pl-6 bg-neutral-20 overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <SidebarSetting />
        </aside>

        <main className="flex-1 overflow-y-auto bg-neutral-20">{children}</main>
      </div>
    </div>
  );
}
