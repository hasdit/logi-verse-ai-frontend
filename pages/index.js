import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/demand?product=Product A")
      .then(res => setForecast(res.data.forecast))
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Logi-Verse AI Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Demand Forecast (Product A)</h2>
          <ul>
            {forecast.map((f,i) => (
              <li key={i}>Day {i+1}: {f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
