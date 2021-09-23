import React from 'react'
import { dexCardstyle, Inputstyle, InputBoxstyle, tokenLogostyle, arrowstyle, dropDownstyle, popoverstyle, maindropDownstyle, dropDownstyle2, dropDownTextstyle, droppedstyle, closeDropstyle, arrowHolder } from 'styles'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { useState } from 'react'
import tokens from './tokens'
import downArrow from 'assets/downArrow.svg'
import switchlogo from 'assets/switchLogo.svg'


function DropDownFrom() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const mappedTokens = tokens.map((token: any) =>
 
    <div style={tokenLogostyle as React.CSSProperties}>
      <img src={token.image} alt="tokenImage" />
      
      <div style={dropDownTextstyle as React.CSSProperties}>
      <p>&nbsp;&nbsp;{token.tkr}</p></div></div>
      )
 
  return (
    
          <div style={maindropDownstyle as React.CSSProperties}>
            <Popover isOpen={isPopoverOpen}
              positions={['bottom']}
              content={<div style={dropDownstyle2 as React.CSSProperties}>{mappedTokens}
              </div>}>

              <div style={dropDownstyle as React.CSSProperties} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                {<div style={closeDropstyle as React.CSSProperties}>
                <div style={dropDownstyle as React.CSSProperties}>{mappedTokens[0]}</div>
                <div style={arrowHolder as React.CSSProperties}>
                <img style={arrowstyle as React.CSSProperties} src={downArrow} alt={'arrow'} />
                </div>
                </div>
                }

              </div>
            </Popover>
           
          </div>
       
     
   
  )
}
function DropDownTo() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const mappedTokens = tokens.map((token: any) =>
  <div style={dropDownstyle as React.CSSProperties}>
    <div style={tokenLogostyle as React.CSSProperties}>
      <img src={token.image} alt="tokenImage" />
      
      <div style={dropDownTextstyle as React.CSSProperties}>
      <p>&nbsp;&nbsp;{token.tkr}</p></div></div>
      </div>)
 
  return (
    
          <div style={maindropDownstyle as React.CSSProperties}>
            <Popover isOpen={isPopoverOpen}
              positions={['bottom']}
              content={<div style={dropDownstyle2}>{mappedTokens}
              </div>}>

              <div style={dropDownstyle as React.CSSProperties} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              {<div style={closeDropstyle as React.CSSProperties}>{mappedTokens[0]}
                <div style={arrowHolder as React.CSSProperties}>
                <img style={arrowstyle as React.CSSProperties} src={downArrow} alt={'arrow'} />
                </div>
                </div>
                }

              </div>
            </Popover>
           
          </div>
       
     
   
  )
}
export {DropDownFrom,DropDownTo}
