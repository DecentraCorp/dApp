import { Legend,ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import  data  from './data';
import { chartstyle } from 'styles';
export default function Chart(){ 
    
    return(
    <ResponsiveContainer width={475}height={400}>
<LineChart data={data}>
  <CartesianGrid strokeDasharray="" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dot={false} dataKey="line1" stroke="#1FE5C1" strokeWidth={3}/>
  <Line type="monotone" dot={false}dataKey="line2" stroke="#01FFA5" strokeWidth={3} />
</LineChart>
</ResponsiveContainer>)}