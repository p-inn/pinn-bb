'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// 예시 데이터
const data = [
  { month: '1월', income: 3500000, expense: 2400000 },
  { month: '2월', income: 3700000, expense: 2550000 },
  { month: '3월', income: 3400000, expense: 2200000 },
  { month: '4월', income: 3600000, expense: 2100000 },
  { month: '5월', income: 3750000, expense: 2800000 },
];

export default function PayChart() {
  return (
    <div className="w-full h-80 sm:h-96 mx-auto">
      <ResponsiveContainer width="90%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => value.toLocaleString() + '원'} />
          <Legend />
          <Bar dataKey="income" name="수입" fill="#81C784" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" name="지출" fill="#FFA75E" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
