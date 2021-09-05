import { Legend,ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import  data  from './data';
import { chartstyle, chartTextstyle, DAIstyle, DCSstyle, legendIconDCSstyle,legendIconDAIstyle, chartbackground } from 'styles';
import React from 'react';
export default function Chart(){ 
    
    return(
      <div style={chartstyle as React.CSSProperties}>
        
    <ResponsiveContainer width={550}height={400}>
<LineChart data={data}>
  <CartesianGrid strokeDasharray=".2" />
  <XAxis tick={false} dataKey="none"  />
  <YAxis tickCount={7} />
  <Tooltip />
 
 
  <Line type="monotone" dot={false} dataKey="DCS" stroke="#1FE5C1" strokeWidth={3}/>
  <Line type="monotone" dot={false}dataKey="DAI" stroke="#01FFA5" strokeWidth={3} />
</LineChart>
</ResponsiveContainer>
<div style={chartbackground as React.CSSProperties}>
        </div>
<div style={chartTextstyle as React.CSSProperties}>
  
  <div style={DCSstyle as React.CSSProperties}>
    <div style={legendIconDCSstyle as React.CSSProperties}/>
    <div>DCS  </div></div>
    <div style={DAIstyle as React.CSSProperties}>
    <div style={legendIconDAIstyle as React.CSSProperties}/>
    <div> DAI &nbsp; </div></div>
</div>

</div>)}