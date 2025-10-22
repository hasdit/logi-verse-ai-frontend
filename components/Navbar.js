import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-blue-600">Logi-Verse AI</h2>
      <div className="flex gap-4 text-gray-600">
        <Link href="/">Dashboard</Link>
        <Link href="/ai-insights">AI Insights</Link>
        <Link href="/logistics-map">Map</Link>
      </div>
    </nav>
  );
}
