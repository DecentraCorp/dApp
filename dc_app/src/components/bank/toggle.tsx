import React, { useState } from 'react'
import LiqTab from './dex/LiqTab'
import SwapTab from './dex/SwapTab'
import { togglestyleLiq, togglestyleSwap} from 'styles'
import {ToggleHelperLiq, ToggleHelperSwap} from './dex/toggleHelper'
const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false)

  return(
    <>
     {!toggle && (
          <>
        <div style={togglestyleSwap}onClick={() => setToggle(!toggle)}>
            <ToggleHelperSwap/>
        </div>
        
      <SwapTab/>
      </>
      )}
      {toggle && (
          <>
 <div style={togglestyleLiq}onClick={() => setToggle(!toggle)}>
     <ToggleHelperLiq/>
 </div>
 <LiqTab/>
      </>
      )}
     
    </>
  )
}
export default ToggleSwitch