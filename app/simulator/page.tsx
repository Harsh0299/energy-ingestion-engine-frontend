import SimulatorCanvas from '@/components/simulator/SimulatorCanvas';

export default function SimulatorPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">
        Meter–Vehicle Simulator
      </h1>

      <p className="text-sm text-gray-600">
        Visual simulation of vehicles charging at meters
      </p>

      <SimulatorCanvas />
    </div>
  );
}
