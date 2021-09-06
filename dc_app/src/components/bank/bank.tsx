import React from 'react'
import { bankstyle,dexCardstyle } from '../../styles'
import ResponsiveContainer from './chart/chart'
import { ResChart } from './chart/responsiveChart'
import Toggle from './toggle'
import Topbar from '../homepage/topbar'
import { ethers } from 'ethers'
import { Provider } from '@ethersproject/providers'

export default function Bank() {
    return (
        <div style={bankstyle as React.CSSProperties}>
            <ResChart/> 
            
            <div style={dexCardstyle as React.CSSProperties}>
            <Toggle/>
        </div>
      
        </div>
    )
}
   