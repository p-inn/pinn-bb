'use client';

import { useWindowWidth } from '@/hooks/useWidth';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface PayChartData {
  month: string;
  income: number;
  expense: number;
}

export default function PayChart({ data }: { data: PayChartData[] }) {
    const width = useWindowWidth();
    if (!data || data.length === 0) {
    return <div className="text-gray-400 py-8 text-center">해당 연도의 데이터가 없습니다</div>;
  }
  return (
    <div className="w-full h-80 sm:h-96 mx-auto">
      <ResponsiveContainer width="90%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          {width > 500 && <YAxis />}
          <Tooltip formatter={(value) => value.toLocaleString() + '원'} />
          <Legend />
          <Bar dataKey="income" name="수입" fill="#81C784" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" name="지출" fill="#FFA75E" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
