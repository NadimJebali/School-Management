"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = ({
  data,
}: {
  data: { name: string; present: number; absent: number }[];
}) => {
  const textGray500 = "#6b7280"; // Tailwind text-gray-500

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart width={500} height={300} data={data} barSize={20}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: textGray500 }}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          tick={{ fill: textGray500 }}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          labelStyle={{ color: textGray500 }}
        />
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{
            paddingTop: "20px",
            paddingBottom: "40px",
            color: textGray500,
          }}
        />
        <Bar
          dataKey="present"
          fill="#FAE27C"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="absent"
          fill="#C3EBFA"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
