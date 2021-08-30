import React from 'react'
import { buttonstyle, dexCardstyle } from '../../../styles'
import Toggle from '../toggle'
import DexInput from './input'

//- Contract imports
import { UseDbank } from '../../../lib/hooks/useDbank'

// Place the calculate purchase hook here pass all props from input into this component


export default function DexButton(_dollarAmount: any) {

    const { _calculatePurchase } = UseDbank()

    return (
        <div>
           {/* <button style={buttonstyle as React.CSSProperties} onClick={(e: any) => _calculatePurchase(_dollarAmount)}>
               Swap
           </button> */}
        </div>
    )
}