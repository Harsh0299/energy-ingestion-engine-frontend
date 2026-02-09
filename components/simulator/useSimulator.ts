import { useEffect, useState } from 'react';
import { VehicleState } from '@/lib/types';

export interface SimulatorRowState {
  id: string;
  vehicleState: VehicleState;
  progress: number;
}

export function useSimulator(initialRows = 2) {
  const [rows, setRows] = useState<SimulatorRowState[]>(
    Array.from({ length: initialRows }).map((_, i) => ({
      id: `meter-${i + 1}`,
      vehicleState: VehicleState.ARRIVING,
      progress: 0,
    }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRows((prev) =>
        prev.map((row) => {
          if (row.vehicleState === VehicleState.CHARGING) {
            const next = row.progress + 5;
            if (next >= 100) {
              return {
                ...row,
                progress: 100,
                vehicleState: VehicleState.LEAVING,
              };
            }
            return { ...row, progress: next };
          }

          if (row.vehicleState === VehicleState.ARRIVING) {
            return { ...row, vehicleState: VehicleState.CHARGING };
          }

          if (row.vehicleState === VehicleState.LEAVING) {
            return {
              ...row,
              progress: 0,
              vehicleState: VehicleState.ARRIVING,
            };
          }

          return row;
        })
      );
    }, 800);

    return () => clearInterval(timer);
  }, []);

  function forceLeave(id: string) {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, vehicleState: VehicleState.LEAVING }
          : row
      )
    );
  }

  function addMeter() {
    setRows((prev) => [
      ...prev,
      {
        id: `meter-${prev.length + 1}`,
        vehicleState: VehicleState.ARRIVING,
        progress: 0,
      },
    ]);
  }

  return { rows, forceLeave, addMeter };
}
