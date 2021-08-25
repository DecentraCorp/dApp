import React from 'react'
import { buttonstyle,CircleButtonstyle, dexCardstyle } from 'styles'
export default function CircleButton() {
    return (
        <div>
           <button style={CircleButtonstyle as React.CSSProperties}>
             {'>'}
           </button>
        </div>
    )
}