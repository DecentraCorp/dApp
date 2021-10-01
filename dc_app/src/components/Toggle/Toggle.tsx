import React, { useState } from 'react'
import { converttextstyle,switchLogostyle,CircleButtonstyle,Inputstyle,InputBoxstyle,togglestyleLiq, togglestyleSwap, buttonstyle, tinytextstyle, toggleHelperstyleActive, toggleHelperstyleInactive} from '../../styles'
import {DropDownTo,DropDownFrom} from '../dex/dropdown'
import switchlogo from '../../assets/switchLogo.svg'

//- Contract imports 
import { UseDbank } from '../../lib/hooks/useDbank'
import { ethers } from 'ethers'



const ToggleSwitch = () => {
  // state
  const [toggle, setToggle] = useState(false)
  const [AmountToSell, setAmountToSell] = React.useState("")

  // contracts
  const dBank = UseDbank();

  const handleChange = (e: any) => {
    setAmountToSell(e.target.value)
  }

  const handleSwap = async () => {

   const tx = await dBank._purchaseStock({
      _amount: ethers.utils.parseUnits(AmountToSell, 'ether'),
      _tokenType: '0x0000000000000000000000000000000000000000'
			
		});

    return tx

  }

  const handleSell = async () => {
    const tx = await dBank._sellStock({
      _amount: ethers.utils.parseUnits(AmountToSell, 'ether')
    })
    return tx
  }


  return(
    <>
     {!toggle && (
          <>
        <div style={togglestyleSwap} onClick={() => setToggle(!toggle)}>
        <div style ={toggleHelperstyleActive as React.CSSProperties}>
           Swap
           </div>    <div style={toggleHelperstyleInactive as React.CSSProperties}>
           Liquidity
           
        </div>
        </div>
        <div><p style={tinytextstyle}>Swap From:</p>
        <div>
            
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
        </div>
        </div>
            <button style={buttonstyle as React.CSSProperties} onClick={handleSwap}>
              Swap
           </button>
      </>
      )}
      {toggle && (
          <>
 <div style={togglestyleLiq}onClick={() => setToggle(!toggle)}>
 <div style ={toggleHelperstyleInactive as React.CSSProperties}>
           Swap
           </div><div style={toggleHelperstyleActive as React.CSSProperties}>
           Liquidity
           
        </div>
 </div>
 <div><p style={tinytextstyle}>Swap From:</p>
        <div>
        <div>
            
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
    <DropDownTo/>
          <input style={Inputstyle as React.CSSProperties} value={AmountToSell} onChange={handleChange} >
          
          </input>
    
    </div>
    <div style = {converttextstyle as React.CSSProperties}>
       <p>1 DCS = X dai</p>
     </div>
    </div>
            </div>
            </div>  
          
        
        </div>
            
            <button style={buttonstyle as React.CSSProperties} onClick={handleSell}>
              Sell
           </button>
           
      </>
      )}
     
    </>
  )
}
export default ToggleSwitch