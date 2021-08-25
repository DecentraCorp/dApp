import React from 'react'
import { bankstyle } from 'styles'
import DexCard from '../bank/dex/card'
import ResponsiveContainer from './chart/chart'
import { ResChart } from './chart/responsiveChart'
export default function Bank() {
    return (
        <div style={bankstyle as React.CSSProperties}>
            <ResChart/>
         <DexCard/>
        </div>
    )
}
