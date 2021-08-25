import React from 'react'
import { dexCardstyle } from 'styles'
import Toggle from '../toggle'
import DexButton from './button'
import DexInput from './input'
import InputBox from './inputbox'
export default function DexCard() {
    return (
        <div style={dexCardstyle as React.CSSProperties}>
            <Toggle/>
            <InputBox/>
            <DexButton/>
        </div>
    )
}