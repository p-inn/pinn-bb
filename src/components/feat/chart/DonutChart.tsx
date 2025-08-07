'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { FcStatistics } from "react-icons/fc";

type DonutChartData = {
  name: string;
  value: number;
  color: string;
};

export default function DonutChart({ data }: { data: DonutChartData[] }) {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
    if (!data || data.length === 0 || total === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-80 sm:h-96 text-gray-400">
        <span className="text-3xl mb-2">
          <FcStatistics />
        </span>
        <span>앗! 아직 등록된 가계 내역이 없어요 🥲</span>
      </div>
    );
  }

  return (
    <div className="w-full h-80 sm:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="90%"
            fill="#8884d8"
            paddingAngle={5}
            label={({ name, value }) => `${name} (${(((value ?? 0 )/ total) * 100).toFixed(1)}%)`}
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
