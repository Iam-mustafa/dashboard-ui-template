import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const data = [
  {
    name: "June",
    OnTime: 4000,
    Delivered: 2400,
    amt: 2400
  },
  {
    name: "July",
    OnTime: 3000,
    Delivered: 1398,
    amt: 2210
  },
  {
    name: "August",
    OnTime: 2000,
    Delivered: 9800,
    amt: 2290
  }
];
export default function App() {
  return (
    <div className="App">
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="OnTime" fill="#8884d8" />
        <Bar dataKey="Delivered" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}