import React from 'react'
import { dexCardstyle } from 'styles'
import Toggle from '../toggle'
export default function DexCard() {
    return (
        <div style={dexCardstyle as React.CSSProperties}>
            <Toggle/>
        </div>
    )
}