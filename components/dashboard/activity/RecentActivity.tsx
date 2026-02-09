'use client';

import { useEffect, useState } from 'react';
import ActivityItem from './ActivityItem';
import ActivitySkeleton from './ActivitySkeleton';
import { API_BASE_URL } from '@/src/lib/constants';

interface ActivityEvent {
  id: string;
  type: string;
  meterId: string;
  vehicleId: string;
  timestamp: string;
}

export default function RecentActivity({
  range = '24h',
}: {
  range?: '24h' | '7d';
}) {
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  async function fetchActivity() {
    try {
      setError(false);
      const res = await fetch(
        `${API_BASE_URL}/v1/analytics/activity?range=${range}&limit=20`
      );

      if (!res.ok) throw new Error();

      const data = await res.json();
      setEvents(data.events || []);
      setLastUpdated(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchActivity();
    const id = setInterval(fetchActivity, 30_000);
    return () => clearInterval(id);
  }, [range]);

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium">Recent Activity</p>
        <LivePulse lastUpdated={lastUpdated} />
      </div>

      {loading && <ActivitySkeleton />}

      {!loading && error && (
        <div className="text-sm text-gray-500">
          Unable to load activity
        </div>
      )}

      {!loading && !error && !events.length && (
        <div className="text-sm text-gray-500">
          No recent activity
        </div>
      )}

      {!loading && !error && events.length > 0 && (
        <div className="space-y-3">
          {events.map((event) => (
            <ActivityItem key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

function LivePulse({
  lastUpdated,
}: {
  lastUpdated: Date | null;
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>

      {lastUpdated
        ? `Updated ${lastUpdated.toLocaleTimeString()}`
        : 'Updating…'}
    </div>
  );
}
