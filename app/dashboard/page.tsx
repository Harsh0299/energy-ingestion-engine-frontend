import DashboardHeader from '@/components/dashboard/DashboardHeader';
import KpiGrid from '@/components/dashboard/KpiGrid';
import ChartsSection from '@/components/dashboard/ChartsSection';
import RecentActivity from '@/components/dashboard/activity/RecentActivity';
import {
  getDashboardSummary,
  getPowerUsage,
  getChargingSessions,
} from '@/lib/server/analytics';

export default async function DashboardPage() {
  const summary = await getDashboardSummary();

  let powerUsage = null;
  let sessions = null;

  try {
    [powerUsage, sessions] = await Promise.all([
      getPowerUsage(),
      getChargingSessions()
    ]);
  } catch {
    // charts will show empty/error state instead of crashing page
  }

  return (
    <div className="p-6 space-y-8">
      <DashboardHeader />

      <section>
        <h2 className="text-sm font-medium text-gray-500 mb-3">
          System Overview
        </h2>
        <KpiGrid summary={summary} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-gray-500 mb-3">
          Energy & Usage Trends
        </h2>
        <ChartsSection
          powerUsage={powerUsage}
          sessions={sessions}
        />
      </section>
      <section>
        <h2 className="text-sm font-medium text-gray-500 mb-3">
          Recent Activity
        </h2>
        <RecentActivity />
      </section>

    </div>
  );
}
