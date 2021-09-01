import React from 'react'
import { CircleButtonstyle, switchLogostyle ,dexCardstyle, Inputstyle, InputBoxstyle, tokenLogostyle, arrowstyle, dropDownstyle, tinytextstyle, converttextstyle } from '../../../styles'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { useState } from 'react'
import tokens from './tokens'
import downArrow from 'assets/downArrow.svg'
import switchlogo from 'assets/switchLogo.svg'

import {DropDownFrom,DropDownTo} from './dropdown'

export default function DexInput() {
  const [AmountToSell, setAmountToSell] = React.useState("")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  
  function handleChange(e: any) {
    setAmountToSell(e.target.value)
  }
  return (
    <div>

      <form>

        <label>
          <div style={InputBoxstyle as React.CSSProperties}>
          <DropDownTo/>
            <input style={Inputstyle as React.CSSProperties} value={AmountToSell} onChange={handleChange} >
            
            </input>
          </div>
        </label>
        <button style={CircleButtonstyle as React.CSSProperties}>
           <img style ={switchLogostyle as React.CSSProperties}src={switchlogo} alt="arrows"/>
           </button>
      </form>
      <div><p style={tinytextstyle}>Swap To:</p></div>
      <div style={InputBoxstyle as React.CSSProperties}>
      <DropDownFrom/>
            <input style={Inputstyle as React.CSSProperties} value={AmountToSell} onChange={handleChange} >
            
            </input>
     
      </div>
      <div style = {converttextstyle as React.CSSProperties}>
         <p>1 DCS = X dai</p>
       </div>
    </div>
  )
}

