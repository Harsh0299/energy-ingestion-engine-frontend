export default function DashboardLoading() {
	return (
		<div className="p-6 space-y-4">
			<div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="h-24 bg-gray-200 rounded animate-pulse" />
				<div className="h-24 bg-gray-200 rounded animate-pulse" />
				<div className="h-24 bg-gray-200 rounded animate-pulse" />
			</div>
		</div>
	);
}
