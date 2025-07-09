"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total", count: 100, fill: "white" },
  { name: "Girls", count: 80, fill: "#FAE27C" },
  { name: "Boys", count: 20, fill: "#C3EBFA" },
];

export default function CountChart() {
  return (
    <div className="bg-white rounded-xl shadow-md w-full h-full p-6 flex flex-col justify-between gap-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Student Overview</h2>
        <Image src="/moreDark.png" alt="more options" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="relative w-full h-64">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            barSize={16}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
              cornerRadius={6}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="center icon"
          width={40}
          height={40}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Legend / Stats */}
      <div className="flex justify-center gap-12 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-[#C3EBFA]" />
          <div className="flex flex-col leading-4">
            <span className="text-sm font-semibold text-gray-700">1,234</span>
            <span className="text-xs text-gray-500">Boys (55%)</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-[#FAE27C]" />
          <div className="flex flex-col leading-4">
            <span className="text-sm font-semibold text-gray-700">1,034</span>
            <span className="text-xs text-gray-500">Girls (45%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
