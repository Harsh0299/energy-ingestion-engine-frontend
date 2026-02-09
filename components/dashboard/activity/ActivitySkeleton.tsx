export default function ActivitySkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-8 bg-gray-100 rounded animate-pulse"
        />
      ))}
    </div>
  );
}
