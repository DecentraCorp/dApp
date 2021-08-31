import React from 'react'
import { dexCardstyle, Inputstyle, InputBoxstyle, tokenLogostyle, arrowstyle, dropDownstyle, tinytextstyle, converttextstyle } from 'styles'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { useState } from 'react'
import tokens from './tokens'
import downArrow from 'assets/downArrow.svg'
import CircleButton from './circleButton'
import DropDownTo from './dropdownTo'
import DropDownFrom from './dropdownFrom'
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
        <CircleButton />
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

