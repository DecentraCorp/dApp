import React from 'react';
import {Wrapper, TopRow, Title, TextBox, Text, RightBox, LogoWrap, Gradient, FullWidthBox, LeftFullWidth, RightFullWidth, RightAlignedContainer, LeftAlignedContainer} from './Style';

/**
 * Chris, this is a super basic skeleton that should get you started. 
 * I left notes throughout to try and help orient. The part on the top right I have no idea how were  * going to do that, but I'll research it and figure it out. A lot of the elements are going to need
 * some padding or margin adjustments to make them line up right. Also, the grey box that is
 * split into two is supposed to be the true whole width of the screen. I'll have to work with the 
 * base style file to allow for that.
 */

const FrontPage = () => {
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
                Area for green logo and curvy background
                </RightBox>
            </TopRow>
            <FullWidthBox full>
                <LeftFullWidth>Left Box</LeftFullWidth>
                <RightFullWidth>Right Box</RightFullWidth>
            </FullWidthBox>
            <RightAlignedContainer>
                <TextBox style={{border: 'solid red 3px'}}>DecentraCore</TextBox>
            </RightAlignedContainer>
            <LeftAlignedContainer>
                <TextBox style={{border: 'solid cyan 3px'}}>DecentraBank</TextBox>
                {/* Image can go here */}
            </LeftAlignedContainer>
            <RightAlignedContainer>
                <TextBox style={{border: 'solid red 3px'}}>DecentraStock</TextBox>
                {/* Image can go here */}
            </RightAlignedContainer>
            <FullWidthBox style={{border: 'solid green 3px'}}>
                {/* Text needs to be in container, likely with left padding or margin */}
                D-Scores
            </FullWidthBox>
            <FullWidthBox>
                {/* Progress bar goes here */}
            </FullWidthBox>
            <FullWidthBox>
                Timeline blurb will go here (need to make the text bubble outshoot)
            </FullWidthBox>
        </Wrapper>
    )
}

export default FrontPage;
