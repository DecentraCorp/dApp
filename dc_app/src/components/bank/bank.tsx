import React from 'react'
import { bankstyle,chartHolder,dexCardstyle } from 'styles'
import ResponsiveContainer from './chart/chart'
import { ResChart } from './chart/responsiveChart'
import Toggle from './toggle'
import Topbar from '../homepage/topbar'
export default function Bank() {
    return (
        <div style={bankstyle as React.CSSProperties}>
            <div style={chartHolder as React.CSSProperties}>
            <ResChart/> 
            </div>
            
            <div style={dexCardstyle as React.CSSProperties}>
            <Toggle/>
        </div>
        </div>
    )
}
   