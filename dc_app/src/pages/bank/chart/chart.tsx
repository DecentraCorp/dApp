import { Text,Legend,ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import  data  from './data';
import { chartstyle, chartTextstyle, chartbackground, tinytextstyle, xAxixText, yAxixText, legendstyle, tokenstyle, legendIconstyle, chartHolder } from 'styles';
import React from 'react';
export default function Chart(){ 
    
    return(<div style={chartHolder as React.CSSProperties}>
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
<div style={chartbackground as React.CSSProperties}/>
        <p style={xAxixText as React.CSSProperties}>
    Amount of USD each DecentraStock token holds
  <div style={legendstyle as React.CSSProperties}>
    <div style={legendIconstyle as React.CSSProperties}/>
    <div>DCS &nbsp; </div>
    <div style={tokenstyle as React.CSSProperties}>
    <div style={legendIconstyle as React.CSSProperties}/>
    <div> DAI  </div></div>
</div>
    </p>
    
        

</div>
</div>)}