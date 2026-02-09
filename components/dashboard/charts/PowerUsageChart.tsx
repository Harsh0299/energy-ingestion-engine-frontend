'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PowerUsagePoint } from '@/lib/types';

interface Props {
  data: PowerUsagePoint[];
}

export default function PowerUsageChart({ data }: Props) {

  if (!data.length) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-gray-500">
        No power usage data available
      </div>
    );
  }

  // Format timestamps for display
  const formattedData = data.map((point) => ({
    time: new Date(point.timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    power: point.powerKw,
  }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={formattedData}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="power"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
