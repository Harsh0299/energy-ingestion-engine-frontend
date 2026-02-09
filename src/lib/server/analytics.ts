import { API_BASE_URL } from "../constants";
import { DashboardSummary, PowerUsageResponse, SessionsResponse } from "../types";


export async function getDashboardSummary(): Promise<DashboardSummary> {
  const res = await fetch(`${API_BASE_URL}/v1/analytics/summary`, {
    // Next.js caching + revalidation
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch dashboard summary');
  }

  return res.json();
}

export async function getPowerUsage(): Promise<PowerUsageResponse> {
  const res = await fetch(
    `${API_BASE_URL}/v1/analytics/power-usage?range=24h&interval=hour`,
    {
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch power usage data');
  }

  return res.json();
}

export async function getChargingSessions(): Promise<SessionsResponse> {
  const res = await fetch(
    `${API_BASE_URL}/v1/analytics/sessions?range=24h&interval=hour`,
    {
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch charging sessions data');
  }

  return res.json();
}