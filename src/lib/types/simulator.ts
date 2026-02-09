import { Meter } from './meter';
import { Vehicle } from './vehicle';

export interface SimulatorRow {
    meter: Meter;
    vehicle: Vehicle | null;

    // UI-only
    progressPercent: number;
}
