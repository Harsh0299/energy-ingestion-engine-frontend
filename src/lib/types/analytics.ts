export interface DashboardSummary {
    totalMeters: number;
    activeMeters: number;

    totalVehicles: number;
    activeChargingSessions: number;

    totalEnergyLast24hKwh: number;
    averageChargingTimeMinutes: number;
}

export interface PowerUsagePoint {
    timestamp: string;
    powerKw: number;
}

export interface PowerUsageResponse {
    range: string;
    interval: string;
    data: PowerUsagePoint[];
}

export interface SessionsPoint {
    timestamp: string; // ISO 8601 UTC
    sessions: number;
}

export interface SessionsResponse {
    range: string;
    interval: string;
    data: SessionsPoint[];
}

type DateRange = '24h' | '7d';
