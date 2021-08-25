import React from 'react'
import { buttonstyle, dexCardstyle } from 'styles'
import Toggle from '../toggle'
import DexInput from './input'
export default function DexButton() {
    return (
        <div>
           <button style={buttonstyle as React.CSSProperties}>
               Swap
           </button>
        </div>
    )
}