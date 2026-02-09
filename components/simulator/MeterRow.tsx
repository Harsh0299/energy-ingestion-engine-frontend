import Vehicle from './Vehicle';
import { SimulatorRowState } from './useSimulator';

export default function MeterRow({
  row,
  onLeave,
}: {
  row: SimulatorRowState;
  onLeave: () => void;
}) {
  return (
    <div className="rounded border bg-white p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">
          ⚡ {row.id}
        </span>

        <button
          onClick={onLeave}
          className="text-xs px-2 py-1 border rounded"
        >
          Leave charging station
        </button>
      </div>

      <div className="relative h-12 bg-gray-100 rounded overflow-hidden">
        <Vehicle
          state={row.vehicleState}
          progress={row.progress}
        />

        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">
          ⚡
        </div>
      </div>
    </div>
  );
}
