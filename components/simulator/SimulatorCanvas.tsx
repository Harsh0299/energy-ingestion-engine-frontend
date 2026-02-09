'use client';

import { useSimulator } from './useSimulator';
import MeterRow from './MeterRow';
import Controls from './Controls';

export default function SimulatorCanvas() {
  const { rows, forceLeave, addMeter } = useSimulator();

  return (
    <div className="space-y-4">
      {rows.map((row) => (
        <MeterRow
          key={row.id}
          row={row}
          onLeave={() => forceLeave(row.id)}
        />
      ))}

      <Controls onAddMeter={addMeter} />
    </div>
  );
}
