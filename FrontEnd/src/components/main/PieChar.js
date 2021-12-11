import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./main.css";
import PercDet from "./PercDet";


const data = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 250 },
    { name: 'Group D', value: 450 },
];
  
const COLORS = ['rgba(251, 139, 142)', 'rgba(220, 222, 229)', 'rgba(121, 222, 206)', 'rgba(110, 207, 220)'];
  
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
   return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
};
  
const PieChar = ()=>{
    
    return <div className="pieChart_container">
           
          <div className="pieChart_container_title">
            <p>HOW DID YOU HEAR ABOUT US ?</p>
          </div>
          
          <PieChart className="pie_chart" width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>

          <div className="pieChart_container_details"> 
            <PercDet title="Facebook" perc="45" color="rgba(110, 207, 220)"/>
            <PercDet title="YouTube" perc="25" color="rgba(121, 222, 206)"/>
            <PercDet title="NewsPaper" perc="20" color="rgba(220, 222, 229)"/>
            <PercDet title="Google Ads" perc="10" color="rgba(251, 139, 142)"/>


          </div >

          </div>  
}


export default PieChar;
