interface Props {
  event: {
    type: string;
    meterId: string;
    vehicleId: string;
    timestamp: string;
  };
}

export default function ActivityItem({ event }: Props) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />

      <div className="flex-1">
        <p className="text-gray-800">
          {formatMessage(event)}
        </p>
        <p className="text-xs text-gray-500">
          {new Date(event.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function formatMessage(event: Props['event']) {
  switch (event.type) {
    case 'charging_started':
      return `Vehicle ${event.vehicleId} started charging at meter ${event.meterId}`;
    case 'charging_completed':
      return `Vehicle ${event.vehicleId} completed charging`;
    case 'vehicle_assigned':
      return `Vehicle ${event.vehicleId} assigned to meter ${event.meterId}`;
    case 'vehicle_left':
      return `Vehicle ${event.vehicleId} left meter ${event.meterId}`;
    default:
      return 'Unknown activity';
  }
}
