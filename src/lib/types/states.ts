// Vehicle lifecycle
export enum VehicleState {
  IDLE = 'idle',
  ARRIVING = 'arriving',
  CHARGING = 'charging',
  LEAVING = 'leaving',
  COMPLETED = 'completed',
}

// Meter lifecycle
export enum MeterState {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  FAULTED = 'faulted', // optional, future-ready
}
