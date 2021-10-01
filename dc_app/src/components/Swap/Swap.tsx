import React from 'react';
import SwapLogo from '../../assets/switchLogo.svg';
import { DropDownFrom } from 'components/dex/dropdown';
import { DropDownTo } from 'components/dex/dropdown';
import {
    DropdownContainer,
    SwitchContainer,
    Wrapper,
    P,
    CenterImage,
    AltP,
    SwapBtn,
    DropdownBox,
} from './Style';


export const SwapForm = () => {
    return (
        <Wrapper>
            <SwitchContainer>Switch</SwitchContainer>
            <DropdownContainer>
            <P>Swap From:</P>
                <DropdownBox>
                    <DropDownTo />
                </DropdownBox>
                <CenterImage src={SwapLogo} alt=''/> {/* Will need click handler here */}
                <P>Swap to:</P>
                <DropdownBox>
                    <DropDownFrom />
                </DropdownBox>
                <AltP>1 DCS = X DAI</AltP>
                <SwapBtn>Swap</SwapBtn>
            </DropdownContainer>
        </Wrapper>
    )
}