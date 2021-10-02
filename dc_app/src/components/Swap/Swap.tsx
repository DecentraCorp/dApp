import React, {useState} from 'react';
import SwapLogo from '../../assets/switchLogo.svg';
import SwitchSelector from 'react-switch-selector';
import {
    DropdownContainer,
    SwitchContainer,
    Wrapper,
    P,
    CenterImage,
    AltP,
    SwapBtn,
    DropdownBox,
    Input
} from './Style';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';

const switchOptions = [
    {
        label: 'SWAP',
        value: 'swap',
        selectedBackgroundColor: '#01FFA5',
    },
    {
        label: 'LIQUIDITY',
        value: 'liquidity',
        selectedBackgroundColor: '#01FFA5',
    }
]


export const SwapForm = () => {
    const [fromValue, setFromValue] = useState<string>();
    const [toValue, setToValue] = useState<string>()
    const [currentFromCurrency, setCurrentFromCurrency] = useState<any>();
    const [currentToCurrency, setCurrentToCurrency] = useState<any>();
    const [selectedFunction, setSelectedFunction] = useState<string>();
    

    const initialSelectedIndex = switchOptions.findIndex(({value}: any) => value === 'swap')

    const handleSwitchChange = (newValue: any) => {
        setSelectedFunction(newValue)
    }

    const handleFromChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFromValue(e.currentTarget.value);
    }

    const handleToChange = (e: React.FormEvent<HTMLInputElement>) => {
        setToValue(e.currentTarget.value);
    }
    return (
        <Wrapper>
            <SwitchContainer>
            <SwitchSelector
                onChange={handleSwitchChange}
                options={switchOptions}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#353B3B'}
                fontColor={'white'}
                selectedFontColor={'black'}
                fontSize={18}
            />
            </SwitchContainer>
            <DropdownContainer>
            <P>Swap From:</P>
                <DropdownBox>
                    <DropdownMenu setCurrent={setCurrentFromCurrency} />
                    <Input placeholder='Value' onChange={(e: React.FormEvent<HTMLInputElement>) => handleFromChange(e)} />
                </DropdownBox>
                <CenterImage src={SwapLogo} alt=''/> {/* Will need click handler here */}
                <P>Swap to:</P>
                <DropdownBox>
                    <DropdownMenu setCurrent={setCurrentToCurrency} />
                    <Input placeholder='Value' onChange={(e: React.FormEvent<HTMLInputElement>) => handleToChange(e)} />
                </DropdownBox>
                <AltP>1 DCS = X DAI</AltP>
                <SwapBtn>Swap</SwapBtn>
            </DropdownContainer>
        </Wrapper>
    )
}