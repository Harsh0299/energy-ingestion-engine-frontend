export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold">
        Energy Analytics Dashboard
      </h1>
      <p className="text-sm text-gray-600">
        Real-time overview of meters, vehicles, and power consumption
      </p>
    </div>
  );
}
