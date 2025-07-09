"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";
import Image from "next/image";

const data = [
  { name: "Mon", present: 60, absent: 40 },
  { name: "Tue", present: 70, absent: 60 },
  { name: "Wed", present: 90, absent: 75 },
  { name: "Thu", present: 90, absent: 75 },
  { name: "Fri", present: 65, absent: 55 },
  { name: "Sat", present: 30, absent: 70 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl shadow-md px-4 pt-4 pb-6 h-full flex flex-col gap-4 min-h-[24rem]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Attendance Overview</h2>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="flex-1 -ml-2"> {/* Slight shift left */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={24}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }} // Remove left margin
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} tickLine={false}/>
            <YAxis tick={{ fill: "#555", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#f9f9f9", borderRadius: 8, fontSize: 12 }}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />
            <Legend
              iconType="circle"
              align="right"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "12px", marginLeft: "1rem" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              radius={[4, 4, 0, 0]}
              activeBar={<Rectangle fill="#FACC15" stroke="#FBBF24" />}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              radius={[4, 4, 0, 0]}
              activeBar={<Rectangle fill="#A5D8F3" stroke="#3B82F6" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
