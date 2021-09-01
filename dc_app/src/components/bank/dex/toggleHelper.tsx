import React from 'react'
import {  toggleHelperstyleActive, toggleHelperstyleInactive } from 'styles'
import Toggle from '../toggle'
import DexInput from './input'
 export function ToggleHelperSwap() {
    return (<>
        <div style ={toggleHelperstyleActive as React.CSSProperties}>
           Swap
           </div>    <div style={toggleHelperstyleInactive as React.CSSProperties}>
           Liquidity
           
        </div>
        </>
    )
}
export function ToggleHelperLiq() {
    return (<>
        <div style ={toggleHelperstyleInactive as React.CSSProperties}>
           Swap
           </div><div style={toggleHelperstyleActive as React.CSSProperties}>
           Liquidity
           
        </div>
        </>
    )
}

