"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

interface SidebarToggleProps {
  children: React.ReactNode;
}

const SidebarToggle = ({ children }: SidebarToggleProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[20%] sm:w-[20%] md:w-[20%] lg:w-[16%] xl:w-[14%] 
        bg-white border-r border-gray-200 shadow-md z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:relative lg:translate-x-0 lg:block`}
      >
        {children}
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Toggle Button */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <IoMdMenu size={28} color="#1f2937" />
      </button>
    </>
  );
};

export default SidebarToggle;
