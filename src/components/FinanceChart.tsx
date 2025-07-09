"use client";

import Image from "next/image";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 3200, expense: 4100 },
  { name: "Sep", income: 3100, expense: 4000 },
  { name: "Oct", income: 3000, expense: 3900 },
  { name: "Nov", income: 2800, expense: 3600 },
  { name: "Dec", income: 3400, expense: 4200 },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl shadow-md w-full h-[28rem] p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-gray-800">Finance Overview</h2>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="flex-grow -ml-4 -mr-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#6B7280", fontSize: 12 }} />
            <YAxis tick={{ fill: "#6B7280", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f9f9f9",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
              }}
            />
            <Legend
              iconType="circle"
              verticalAlign="top"
              height={36}
              wrapperStyle={{ paddingBottom: "12px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#C3EBFA"
              strokeWidth={3}
              activeDot={{ r: 6 }}
              name="Income"
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#FAE27C"
              strokeWidth={3}
              name="Expense"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
