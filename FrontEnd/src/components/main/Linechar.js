import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./main.css";


const data = [
  {
    name: 'MON',
    uv: 0.3,
    pv: 0.4,
    amt: 2400,
  },
  {
    name: 'TUE',
    uv: 0.7,
    pv: 0.9,
    amt: 2210,
  },
  {
    name: 'WED',
    uv: 1.0,
    pv:1.2,
    amt: 2290,
  },
  {
    name: 'THU',
    uv: 0.8,
    pv: 1.4,
    amt: 2000,
  },
  {
    name: 'FRI',
    uv: 0.9,
    pv: 0.8,
    amt: 2181,
  },
  {
    name: 'SAT',
    uv: 0.6,
    pv: 0.5,
    amt: 2.5,
  },
  {
    name: 'SUN',
    uv: 0.9,
    pv: 0.3,
    amt: 1.5,
  },
];

const Linechar = ()=>{
    return <div className="lineChart_container">
      <h2 className="lineChart_container_title">Sales Vs COGS</h2>
      <LineChart
      width={800}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 10,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis  dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        
      />
     </LineChart>

     <div className="lineChart_container_down"> 
       <div>
         <p>NUMBER OF INVOICES</p>
         <strong>99</strong>
       </div>
       <div><p>Sales</p>
         <strong>$5000</strong></div>
       <div><p>COGS</p>
         <strong>$2400</strong></div>
     </div>

     </div>
}

export default Linechar;
