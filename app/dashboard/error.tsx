'use client';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-xl font-semibold text-red-600">
        Dashboard unavailable
      </h2>

      <p className="mt-2 text-sm text-gray-600 max-w-md">
        We couldn’t load analytics data right now.
        This is usually temporary.
      </p>

      <p className="mt-2 text-xs text-gray-400">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-6 rounded bg-black px-4 py-2 text-white text-sm"
      >
        Retry
      </button>
    </div>
  );
}
