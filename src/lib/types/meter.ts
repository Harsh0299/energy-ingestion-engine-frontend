import { MeterState } from './states';

export interface Meter {
    id: string;
    name?: string;

    state: MeterState;

    maxPowerKw: number;

    // timestamps
    createdAt: string;
    updatedAt: string;
}
