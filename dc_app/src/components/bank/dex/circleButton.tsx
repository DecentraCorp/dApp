import React from 'react'
import { buttonstyle,CircleButtonstyle, dexCardstyle } from 'styles'
import SwitchLogo from './switchLogo'
export default function CircleButton() {
    return (
        <div>
           <button style={CircleButtonstyle as React.CSSProperties}>
            <SwitchLogo/>
           </button>
        </div>
    )
}