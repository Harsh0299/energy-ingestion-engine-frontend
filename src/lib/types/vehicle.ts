import { VehicleState } from './states';

export interface Vehicle {
    id: string;
    name?: string;

    state: VehicleState;

    batteryCapacityKwh: number;
    currentChargeKwh: number;

    createdAt: string;
    updatedAt: string;
}
