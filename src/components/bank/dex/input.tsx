import React from 'react'
import { dexCardstyle, Inputstyle } from 'styles'

export default function DexInput() {
    const [AmountToSell, setAmountToSell] = React.useState("")
    function handleChange (e:any) {
        setAmountToSell(e.target.value)
      }
    return (
        <div>
         Swap From
        <form>
       
          <label>
             <input style={Inputstyle}type="number" value={AmountToSell} onChange={handleChange} />
          </label>
        </form>
        <div style={Inputstyle}>
        <h5>Swap To {AmountToSell}</h5>
        </div>
      </div>
    )
}
   
  