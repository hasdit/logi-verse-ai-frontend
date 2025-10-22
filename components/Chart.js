import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Chart() {
  const data = [
    { name: "Dhaka", orders: 200 },
    { name: "Chattogram", orders: 150 },
    { name: "Khulna", orders: 120 },
    { name: "Rajshahi", orders: 90 }
  ];

  return (
    <BarChart width={350} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Bar dataKey="orders" fill="#3b82f6" />
    </BarChart>
  );
}
