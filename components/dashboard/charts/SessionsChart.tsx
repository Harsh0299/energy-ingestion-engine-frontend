'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { SessionsPoint } from '@/lib/types';

interface Props {
  data: SessionsPoint[];
}

export default function SessionsChart({ data }: Props) {
  if (!data.length) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-gray-500">
        No charging session data available
      </div>
    );
  }

  const formattedData = data.map((point) => ({
    time: new Date(point.timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    sessions: point.sessions,
  }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={formattedData}>
        <XAxis dataKey="time" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="sessions" />
      </BarChart>
    </ResponsiveContainer>
  );
}
