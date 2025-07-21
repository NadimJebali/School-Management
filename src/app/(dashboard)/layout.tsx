"use client";

import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-[#F7F8FA] relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[20%] sm:w-[20%] md:w-[20%] lg:w-[16%] xl:w-[14%] 
        bg-white border-r border-gray-200 shadow-md z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:relative lg:translate-x-0 lg:block`}
      >
        <div className="flex flex-col h-full p-4 overflow-y-auto hide-scrollbar">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-start gap-2 mb-8 px-2"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden md:block font-bold text-lg text-gray-900">
              School Name
            </span>

          </Link>

          {/* Menu Component */}
          <div className="flex-1 space-y-2">
            <Menu />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-0">
        {/* Navbar and Toggle Button */}
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <IoMdMenu size={28} color="#1f2937" />
          </button>
          <div className="flex-1 flex justify-end">
    <Navbar />
  </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
