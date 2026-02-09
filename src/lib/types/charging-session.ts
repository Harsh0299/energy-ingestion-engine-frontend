export interface ChargingSession {
    id: string;

    meterId: string;
    vehicleId: string;

    startTime: string;
    endTime?: string;

    energyConsumedKwh: number;

    isCompleted: boolean;
}
