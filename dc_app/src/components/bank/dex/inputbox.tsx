import React from 'react'
import { dexCardstyle, InputBoxstyle } from '../../../styles'
import Toggle from '../toggle'
import DexButton from './button'
import DexInput from './input'


export default function InputBox() {
    return (
        <div>Swap From
        <div style={InputBoxstyle as React.CSSProperties}>
            
          <DexInput/>
        </div>
        </div>
    )
}