import {
  PowerUsageResponse,
  SessionsResponse,
} from '@/lib/types';
import PowerUsageChart from './charts/PowerUsageChart';
import SessionsChart from './charts/SessionsChart';

interface Props {
  powerUsage: PowerUsageResponse | null;
  sessions: SessionsResponse | null;
}

export default function ChartsSection({
  powerUsage,
  sessions,
}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Power Usage (Last 24h)">
        {powerUsage ? (
          <PowerUsageChart data={powerUsage.data} />
        ) : (
          <ChartError />
        )}
      </ChartCard>

      <ChartCard title="Charging Sessions">
        {sessions ? (
          <SessionsChart data={sessions.data} />
        ) : (
          <ChartError />
        )}
      </ChartCard>
    </div>
  );
}

/* -------------------------------
   Reusable Chart Card Wrapper
-------------------------------- */
function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm border">
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700">
          {title}
        </p>
      </div>

      {children}
    </div>
  );
}

/* -------------------------------
   Chart Error Placeholder
-------------------------------- */
function ChartError() {
  return (
    <div className="h-64 flex items-center justify-center text-sm text-gray-500">
      Unable to load chart data
    </div>
  );
}