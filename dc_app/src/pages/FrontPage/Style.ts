import styled from 'styled-components';

interface StyleProps {
    full?: boolean;
}

export const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
`;

export const TopRow = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    margin-left: 3em;
`;

export const Title = styled.h2`
    font-family: spartan;
    font-size: 32px;
    line-height: 43px;
    font-weight: 700;
`;

export const TextBox = styled.div`
    width: 49%;
    margin-left: 3em;
    text-align: left;
    height: 50%;
`;

export const Text = styled.p`
    font-family: spartan;
    size: 24px;
    line-height: 30px;
    width: 80%;
    font-weight: 500;
`;

export const LogoWrap = styled.div`
    width: 50%;
    height: 90%;
`;

export const RightBox = styled.div`
    width: 51%;
    display: flex;
    justify-content: center;
    background-image: url(gradient-green.png);
    border: solid red 4px;
`;

export const Gradient = styled.div`
    border: solid red 4px;
    width: 100%;
    height: 100%;
    background-image: url('./gradient-green.png')
`;

export const FullWidthBox = styled.div<StyleProps>`
    width: ${(props) => props.full ? '100vw' : '100%'};
    height: 200px;
    background-color: ${(props) => props.full ? '#636d6c' : ''};
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
`;

export const LeftFullWidth = styled.div`
    width: 50%;
`;

export const RightFullWidth = styled.div``;

export const RightAlignedContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
`;

export const LeftAlignedContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
`;
