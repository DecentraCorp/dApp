import React from 'react'
import { bankstyle,dexCardstyle } from '../../styles'
import ResponsiveContainer from './chart/chart'
import { ResChart } from './chart/responsiveChart'
import Toggle from './toggle'
import Topbar from '../homepage/topbar'
import { UseDbank } from '../../lib/hooks/useDbank'

const Bank = () => {

    const dBank = UseDbank()

    const handleAdd = async () => {
        dBank._addNewCollateralType(
         '0x0000000000000000000000000000000000000000'
       );
     }

    return (
        <div style={bankstyle as React.CSSProperties}>
            <ResChart/> 
            
            <div style={dexCardstyle as React.CSSProperties}>
            <Toggle/>
        </div>
        
        Add new colateral
       
        <button onClick={handleAdd}>Add Token</button>
        </div>
    )
}
   
export default Bank;

