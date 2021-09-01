import switchlogo from 'assets/switchLogo.svg'

import React from 'react'
import { dexCardstyle, switchLogostyle } from 'styles'
import Toggle from '../toggle'
import DexButton from './button'
import DexInput from './input'
import InputBox from './inputbox'
export default function SwitchLogo() {
    return (
        <div >
           <img style ={switchLogostyle as React.CSSProperties}src={switchlogo}/>
           
        </div>
    )
}