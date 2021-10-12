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
  height: 100%;
`;

export const Title = styled.h2`
  font-family: spartan;
  font-size: 32px;
  line-height: 43px;
  font-weight: 700;
`;

export const PointTitle = styled.h2`
  font-family: spartan;
  font-size: 30px;
  line-height: 43px;
  font-weight: 700;
  color: #01ffa5;
`;

export const TextBox = styled.div`
  width: 49%;
  margin-left: 3em;
  text-align: left;
  height: 50%;
`;

export const InLineImageTextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 49%;
  margin-top: 10em;
  margin-left: 3em;
  text-align: left;
  height: 50%;
`;

export const Text = styled.h2`
  display: flex;
  font-family: spartan;
  size: 50px;
  line-height: 50px;
  width: auto;
  font-weight: 500;
  margin-left: 3em;
  justify-content: center;
`;

export const TitleText = styled.h2`
  font-family: spartan;
  size: 50px;
  line-height: 40px;
  width: 80%;
  font-weight: 500;
`;

export const LogoWrap = styled.div`
  width: 50%;
  height: 90%;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(gradient-green.png);
  flex-direction: row;
  height: auto;
  width: auto;
`;

export const RightBox = styled.div`
  width: 51%;
  display: flex;
  justify-content: center;
  background-image: url(gradient-green.png);
`;

export const Gradient = styled.div`
  border: solid red 4px;
  width: 100%;
  height: 100%;
  background-image: url('./gradient-green.png');
`;

export const FullWidthBoxTop = styled.div<StyleProps>`
  width: ${(props) => (props.full ? '100vw' : '100%')};
  height: 800px;
  display: flex;
  flex-direction: row;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const FullWidthBox = styled.div<StyleProps>`
  width: ${(props) => (props.full ? '100vw' : '100%')};
  height: 650px;
  background-color: ${(props) => (props.full ? '#636d6c' : '')};
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
`;

export const FullWidthBoxBottom = styled.div<StyleProps>`
  width: ${(props) => (props.full ? '100vw' : '100%')};
  height: 800px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const LeftFullWidth = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const RightFullWidth = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

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
