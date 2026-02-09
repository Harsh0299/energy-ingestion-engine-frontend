interface Props {
    title: string;
    value: string;
}

export default function KpiCard({ title, value }: Props) {
    return (
        <div className="rounded-lg bg-white p-4 shadow-sm border">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="mt-2 text-2xl font-semibold">{value}</p>
        </div>
    );
}
