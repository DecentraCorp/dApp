import React from 'react'
import { dexCardstyle, Inputstyle } from '../../../styles'
import { buttonstyle} from '../../../styles'
import CircleButton from './circleButton'

//- Contract imports
import { UseDbank } from '../../../lib/hooks/useDbank'

export default function DexInput() {

  const { _calculatePurchase } = UseDbank()

    const [AmountToSell, setAmountToSell] = React.useState<any>(0)
    function handleChange (e:any) {
        setAmountToSell(e.target.value)
      }
    return (
      <>
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

<div>
<button style={buttonstyle as React.CSSProperties} >
    Swap
</button>
{console.log(AmountToSell, 'line 39')}
</div>
</>
    )
}
   
  