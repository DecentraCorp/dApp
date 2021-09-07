import React from 'react'
import { dexCardstyle, Inputstyle, InputBoxstyle, tokenLogostyle, arrowstyle, dropDownstyle, popoverstyle, maindropDownstyle, dropDownstyle2, dropDownTextstyle } from '../../../styles'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { useState } from 'react'
import tokens from './tokens'
import downArrow from 'assets/downArrow.svg'
import switchlogo from 'assets/switchLogo.svg'

function DropDownFrom() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const mappedTokens = tokens.map((token: any) =>
  <div style={dropDownstyle as React.CSSProperties}>
    <div style={tokenLogostyle as React.CSSProperties}>
      <img src={token.image} alt="tokenImage" />
      
      <div style={dropDownTextstyle}>
      <p>&nbsp;&nbsp;{token.tkr}</p></div></div>
      </div>)
 
  return (
    
          <div style={maindropDownstyle as React.CSSProperties}>
            <Popover isOpen={isPopoverOpen}
              positions={['bottom']}
              content={<div style={dropDownstyle2}>{mappedTokens}
              </div>}>

              <div style={dropDownstyle} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                {<div >{mappedTokens[0]}

                </div>
                }
              </div>
            </Popover>
            <img style={arrowstyle as React.CSSProperties} src={downArrow} alt={'arrow'} />
           
          </div>
       
     
   
  )
}
function DropDownTo() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const mappedTokens = tokens.map((token: any) =>
  <div style={dropDownstyle as React.CSSProperties}>
    <div style={tokenLogostyle as React.CSSProperties}>
      <img src={token.image} alt="tokenImage" />
      
      <div style={dropDownTextstyle}>
      <p>&nbsp;&nbsp;{token.tkr}</p></div></div>
      </div>)
 
  return (
    
          <div style={maindropDownstyle as React.CSSProperties}>
            <Popover isOpen={isPopoverOpen}
              positions={['bottom']}
              content={<div style={dropDownstyle2}>{mappedTokens}
              </div>}>

              <div style={dropDownstyle} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                {<div >{mappedTokens[0]}

                </div>
                }
              </div>
            </Popover>
            <img style={arrowstyle as React.CSSProperties} src={downArrow} alt={'arrow'} />
           
          </div>
       
     
   
  )
}

export {DropDownFrom,DropDownTo}
