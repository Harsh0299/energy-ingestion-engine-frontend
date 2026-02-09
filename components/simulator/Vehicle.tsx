import { VehicleState } from '@/lib/types';

export default function Vehicle({
  state,
  progress,
}: {
  state: VehicleState;
  progress: number;
}) {
  let translateX = '0%';

  if (state === VehicleState.ARRIVING) translateX = '20%';
  if (state === VehicleState.CHARGING) translateX = '70%';
  if (state === VehicleState.LEAVING) translateX = '110%';

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 transition-transform duration-700"
      style={{ transform: `translateX(${translateX})` }}
    >
      <div className="text-xl">🚗</div>

      {state === VehicleState.CHARGING && (
        <div className="text-[10px] text-center">
          {progress}%
        </div>
      )}
    </div>
  );
}
