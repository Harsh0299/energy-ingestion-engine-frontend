import { DashboardSummary } from '@/lib/types';
import KpiCard from './KpiCard';

interface Props {
  summary: DashboardSummary;
}

export default function KpiGrid({ summary }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard
        title="Total Energy (24h)"
        value={`${summary.totalEnergyLast24hKwh.toFixed(1)} kWh`}
      />

      <KpiCard
        title="Active Meters"
        value={`${summary.activeMeters} / ${summary.totalMeters}`}
      />

      <KpiCard
        title="Active Vehicles"
        value={`${summary.activeChargingSessions}`}
      />

      <KpiCard
        title="Avg Charging Time"
        value={`${summary.averageChargingTimeMinutes.toFixed(1)} min`}
      />
    </div>
  );
}
