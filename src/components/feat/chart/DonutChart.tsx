'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '식비', value: 400, color: '#8C81C7' },
  { name: '교통', value: 300, color: '#FFA75E' },
  { name: '문화/여가', value: 200, color: '#C781B9' },
  { name: '기타', value: 100, color: '#819BC7' },
];

export default function DonutChart() {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
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
            label={({ name, value }) => `${name} (${((value / total) * 100).toFixed(1)}%)`}
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
