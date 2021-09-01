import React from 'react'
import { dexCardstyle, InputBoxstyle, tinytextstyle } from 'styles'
import Toggle from '../toggle'
import DexButton from './button'
import DexInput from './input'
export default function InputBox() {
    return (
        <div><p style={tinytextstyle}>Swap From:</p>
        <div>
            
          <DexInput/>
        </div>
        </div>
    )
}