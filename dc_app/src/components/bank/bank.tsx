import React from 'react'
import { bankstyle } from '../../styles'
import DexCard from './dex/card'
import ResponsiveContainer from './chart/chart'
import { ResChart } from './chart/responsiveChart'
import Topbar from '../homepage/topbar'

export default function Bank() {
    return (
        <div style={bankstyle as React.CSSProperties}>
            <ResChart/> 
            <Topbar/>
         <DexCard/>
        </div>
    )
}
   