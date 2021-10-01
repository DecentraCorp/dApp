import React from 'react';
import { ReactComponent as Logo} from '../../assets/DCLogo.svg';
import {Wrapper, TopRow, Title, TextBox, Text, LogoWrap, RightBox, Gradient} from './Style';

const FrontPage = () => {
    const imagePath = './gradient-green.png'
    return (
        <Wrapper>
            <TopRow>
                <TextBox>
                    <Title>The worlds first <br /> decentralized corporation</Title>
                <Text>
                    DecentraCorp is the world’s first Decentralized Autonomous Corporation (DAC) where the CEO and Shareholders are the employees, managers and factory owners.
                </Text>
                </TextBox>
                <RightBox>
                    <img src='./gradient-green.png' alt='' style={{height: '100%'}}/>
                    {/* <LogoWrap>
                        <Logo style={{width: '100%', marginTop: 0, height: '70%'}} />
                    </LogoWrap> */}
                </RightBox>
            </TopRow>
        </Wrapper>
    )
}

export default FrontPage;
