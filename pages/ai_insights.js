import React, { useEffect, useState } from "react";
import Plot from 'react-plotly.js';
import axios from "axios";

export default function AIInsights() {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/demand?product=Product A")
      .then(res => setForecast(res.data.forecast))
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">AI Insights</h1>
      <Plot
        data={[
          { x: forecast.map((_,i)=>i+1), y: forecast, type:'scatter', mode:'lines+markers', marker:{color:'blue'} },
        ]}
        layout={{width:700, height:400, title:'Predicted Demand'}}
      />
    </div>
  )
}
