import React from 'react'
import { bankstyle } from '../../styles'
import DexCard from './dex/card'
import ResponsiveContainer from './chart/chart'
import { ResChart } from './chart/responsiveChart'
import Topbar from '../homepage/topbar'
import { UseDbank } from '../../lib/hooks/useDbank'

export default function Bank() {
    const { _addNewCollateralType } = UseDbank()
    return (
        <div style={bankstyle as React.CSSProperties}>
            <ResChart/> 
            <Topbar/>
            <div>add token</div>
            <div>widthdraw funds</div>
         <DexCard/>
         <div>
 
  
</div>
        </div>
    )
}
   