export default function Controls({
  onAddMeter,
}: {
  onAddMeter: () => void;
}) {
  return (
    <button
      onClick={onAddMeter}
      className="px-4 py-2 rounded bg-black text-white text-sm"
    >
      + Add Meter
    </button>
  );
}
