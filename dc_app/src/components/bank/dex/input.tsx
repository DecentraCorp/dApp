import React from 'react'
import { dexCardstyle, Inputstyle } from '../../../styles'
import { buttonstyle} from '../../../styles'
import CircleButton from './circleButton'

//- Contract imports
import { UseDbank } from '../../../lib/hooks/useDbank'
import { Maybe } from '../../../lib/utils/types'
import { ethers } from 'ethers'

export default function DexInput() {

  const dBank = UseDbank()

    const [AmountToSell, setAmountToSell] = React.useState<any>(0)

    
    const handlePurchase = async () => {
      let tx: Maybe<ethers.ContractTransaction>;

      tx = await dBank._purchaseStock({
       _amount: AmountToSell,
				_tokenType: '0x0000000000000000000000000000000000000000'
      });
    }

    

    const handleChange = (e:any) => {
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
    
<button style={buttonstyle as React.CSSProperties} onClick={handlePurchase} >
    Swap
</button>
{console.log(AmountToSell, 'line 39')}
</div>
</>
    )
}
   
  