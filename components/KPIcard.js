export default function KPIcard({ title, value }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-blue-700">{value}</p>
    </div>
  );
}
