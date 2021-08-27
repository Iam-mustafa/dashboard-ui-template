import React from "react";
import { LineChart, Line, XAxis, YAxis, ReferenceArea } from "recharts";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const data = [];

const rand = 300;
for (let i = 0; i < 7; i++) {
  let d = {
    year: 2000 + i,
    value: Math.random() * (rand + 50) + 100
  };

  data.push(d);
}

const Chart = () => (
  <div style={styles}>
    <LineChart
      width={420}
      height={305}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
      <XAxis dataKey="year" />
      <YAxis />
      <ReferenceArea x1={2001} x2={2003} label="an important period" />
    </LineChart>
  </div>
);
export default Chart;

