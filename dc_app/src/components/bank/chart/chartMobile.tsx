import { Legend,ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import  data  from './data';
import { chartstyle } from 'styles';
export default function ChartMobile(){ 
    
    return(
    <ResponsiveContainer width={200} height={200}>
<LineChart style={{flex:.3}}data={data}
  >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="line1" stroke="#8884d8" />
  <Line type="monotone" dataKey="line2" stroke="#82ca9d" />
</LineChart>
</ResponsiveContainer>)}