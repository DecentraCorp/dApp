import React, { useState } from 'react';
import Select from 'react-select';
import { components } from 'react-select';
import tokens from './tokens';
import {
    Container,
    Image,
    Span,
} from './Style'

const options = [
    {value: tokens[0].tkr, label: <Span><Image src={tokens[0].image} alt=''/> {tokens[0].name} </Span>},
    {value: tokens[1].tkr, label: <Span><Image src={tokens[1].image} alt=''/> {tokens[1].name} </Span>},
];

const customStyles = {
    option: (provided: any, state: any) => ({
        ...provided,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#353b3b',
        fontFamily: 'Spartan',
        fontSize: '18px',
    }),
    control: (provided: any) => ({
        ...provided,
        backgroundColor: '#353b3b',
        border: 'none',
        boxShadow: 'none'
    }),
    menu: (provided: any, state: any) => ({
        backgroundColor: '#353b3b',
        borderRadius: '8px',
        border: 'none',
        boxShadow: '10px 14px 28px -10px #01FFA5'
    }),
}

// Will need to build data aggregator once calls are made
interface DropDownProps {
    setCurrent: any;
}

export const DropdownMenu = ({setCurrent}: DropDownProps) => {
    const [selectedOption, setSelectedOption] = useState<any>();

    const handleChange = (e: any) => {
        console.log(e);
        setSelectedOption(e);
        setCurrent(e);
    }
    console.log(selectedOption);
    return (
        <Container>
            <Select
                value={selectedOption}
                onChange={(e: any) => handleChange(e)}
                options={options}
                styles={customStyles}
            />
        </Container>
    )
}