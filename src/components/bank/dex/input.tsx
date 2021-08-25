import React from 'react'
import { dexCardstyle, Inputstyle } from 'styles'
import CircleButton from './circleButton'

export default function DexInput() {
    const [AmountToSell, setAmountToSell] = React.useState("")
    function handleChange (e:any) {
        setAmountToSell(e.target.value)
      }
    return (
        <div>
        
        <form>
       
          <label>
             <input style={Inputstyle}type="number" value={AmountToSell} onChange={handleChange} />
          </label>
          <CircleButton/>
        </form>
         Swap To 
        <div style={Inputstyle}>
             
        <h5>{AmountToSell}</h5>
        </div>
      </div>
    )
}
   
  