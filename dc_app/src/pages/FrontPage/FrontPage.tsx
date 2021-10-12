import React from 'react';
import DCLogo from '../../assets/DCLogo.svg';
import BlockchainD from '../../assets/blockchainD.svg';
import GreenWorldV from '../../assets/GreenWorldV.svg';
import DBank from '../../assets/DBank.svg';
import DCoreContract from '../../assets/DCoreContract.svg';
import DStock from '../../assets/DStock.svg';

import {
  Wrapper,
  TopRow,
  Title,
  TitleText,
  PointTitle,
  TextBox,
  ImageBox,
  InLineImageTextBox,
  Text,
  RightBox,
  LogoWrap,
  Gradient,
  FullWidthBox,
  FullWidthBoxTop,
  FullWidthBoxBottom,
  LeftFullWidth,
  RightFullWidth,
  RightAlignedContainer,
  LeftAlignedContainer,
} from './Style';

/**
 * Chris, this is a super basic skeleton that should get you started.
 * I left notes throughout to try and help orient. The part on the top right I have no idea how were  * going to do that, but I'll research it and figure it out. A lot of the elements are going to need
 * some padding or margin adjustments to make them line up right. Also, the grey box that is
 * split into two is supposed to be the true whole width of the screen. I'll have to work with the
 * base style file to allow for that.
 */

const FrontPage = () => {
  return (
    <div>
      <Wrapper>
        <FullWidthBoxTop full>
          <TopRow>
            <TextBox>
              <Title>
                The worlds first <br /> decentralized corporation
              </Title>
              <TitleText>
                DecentraCorp is the world’s first Decentralized Autonomous
                Corporation (DAC) where the CEO and Shareholders are the
                employees, managers and factory owners.
              </TitleText>
            </TextBox>
            <RightBox>
              <div>
                <img src={DCLogo} alt="" />
              </div>
            </RightBox>
          </TopRow>
        </FullWidthBoxTop>
        <FullWidthBox full>
          <LeftFullWidth>
            <InLineImageTextBox>
              <ImageBox>
                <img src={BlockchainD} alt="" />
              </ImageBox>
              <Text>
                Operating under the guiding principles of decentralization and
                individual autonomy, DecentraCorp seeks to radically alter the
                corporate world.
              </Text>
            </InLineImageTextBox>
          </LeftFullWidth>
          <RightFullWidth>
            <InLineImageTextBox>
              <ImageBox>
                <img src={GreenWorldV} alt="" />
              </ImageBox>
              <Text>
                DecentraCorp aims to empower individuals by providing the tools
                needed for entrepreneurship, self advancement and fulfillment
                while coordinating a global community to build a better world.
              </Text>
            </InLineImageTextBox>
          </RightFullWidth>
        </FullWidthBox>
        <RightFullWidth>
          <img src={DCoreContract} alt="" style={{ width: '13%' }} />
          <RightAlignedContainer>
            <TextBox>
              <PointTitle>DecentraCore </PointTitle>
              <Text>
                The DecentraCore contract is the central contract for the
                DecentraCorp contract set. This contract handles DecentraCorp’s
                DAO functionality like proposals and voting as well as
                maintaining a user’s D-Score.
              </Text>
            </TextBox>
          </RightAlignedContainer>
        </RightFullWidth>
        <LeftFullWidth>
          <LeftAlignedContainer>
            <TextBox>
              <PointTitle> DecentraBank </PointTitle>
              <Text>
                The DecentraBank smart-contract is responsible for exchanging
                stable-coins like DAI and DecentraDollar for DecentraStock
                utilizing a dual bonding-curve mechanism. The bonding curve sets
                the price for DecentraStock and helps tether the price of
                DecentraDollar to that of other stable-coins. The fees from
                exchanges are placed directly under the control of DecentraCorp
                and it’s members.
              </Text>
            </TextBox>
            <img src={DBank} alt="" style={{ width: '18%' }} />
          </LeftAlignedContainer>
        </LeftFullWidth>
        <RightFullWidth>
          <RightAlignedContainer>
            <img src={DStock} alt="" style={{ width: '15%' }} />
            <TextBox>
              <PointTitle>DecentraStock</PointTitle>
              <Text>
                DecentraStock is the ERC20 membership token for DecentraCorp. To
                become an active DecentraCorp member, an account must stake at
                least one DecentraStock for activation. Additional DecentraStock
                can be staked as well to increase a users D-Score. While staked
                DecentraStock does play a factor into a users D-Score it is not
                the main factor for determining D-Score.
              </Text>
            </TextBox>
          </RightAlignedContainer>
        </RightFullWidth>
        <FullWidthBoxBottom full>
          <PointTitle>D-Scores</PointTitle>
          <Text>
            Members of DecentraCorp all have a D-Score associated with their
            account. This D-Score is used to determine a users trustworthiness
            within the company. D-score is determined using a combination of
            attributes and determines a members voting power, rank/reputation
            and abilities within DecentraCorp. A user's D-score tells both
            customers and other members how trustworthy a member is.
          </Text>
          <Text>
            <PointTitle>
              {' '}
              D-score is made up of the following factors:  {' '}
            </PointTitle>
            <br /> • Jobs: the number of D-jobs completed by the member <br /> •
            Reputation: the overall average of the rating of each job performed{' '}
            <br /> • Stake: the number of DecentraStock a member has staked{' '}
            <br /> • Verified: the number of times a member has been audited{' '}
            <br /> • Audit: the number of other members this account has audited{' '}
            <br /> • Level: a members level is determined by a DecentraCorp
            community by vote
          </Text>
        </FullWidthBoxBottom>
      </Wrapper>
    </div>
  );
};

export default FrontPage;
