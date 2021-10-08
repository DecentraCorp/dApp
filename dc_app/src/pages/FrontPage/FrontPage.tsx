import React from 'react';
import DCLogo from '../../assets/DCLogo.svg';
import BlockchainD from '../../assets/blockchainD.svg';
import GreenWorldV from '../../assets/GreenWorldV.svg';

import {
  Wrapper,
  TopRow,
  Title,
  TextBox,
  InLineImageTextBox,
  Text,
  RightBox,
  LogoWrap,
  Gradient,
  FullWidthBox,
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
        <TopRow>
          <TextBox>
            <Title>
              The worlds first <br /> decentralized corporation
            </Title>
            <Text>
              DecentraCorp is the world’s first Decentralized Autonomous
              Corporation (DAC) where the CEO and Shareholders are the
              employees, managers and factory owners.
            </Text>
          </TextBox>
          <RightBox>
            <div>
              <img src={DCLogo} alt="" />
            </div>
          </RightBox>
        </TopRow>
        <FullWidthBox full>
          <LeftFullWidth>
            <InLineImageTextBox>
              <img src={BlockchainD} alt="" />
              <Text>
                Operating under the guiding principles of decentralization and
                individual autonomy, DecentraCorp seeks to radically alter the
                corporate world.
              </Text>
            </InLineImageTextBox>
          </LeftFullWidth>
          <RightFullWidth>
            <InLineImageTextBox>
              <img src={GreenWorldV} alt="" />
              <Text>
                DecentraCorp aims to empower individuals by providing the tools
                needed for entrepreneurship, self advancement and fulfillment
                while coordinating a global community to build a better world.
              </Text>
            </InLineImageTextBox>
          </RightFullWidth>
        </FullWidthBox>
        <RightAlignedContainer>
          <TextBox style={{ border: 'solid red 3px' }}>
            DecentraCore{' '}
            <Text>
              The DecentraCore contract is the central contract for the
              DecentraCorp contract set. This contract handles DecentraCorp’s
              DAO functionality like proposals and voting as well as maintaining
              a user’s D-Score.
            </Text>
          </TextBox>
        </RightAlignedContainer>
        <LeftAlignedContainer>
          <TextBox style={{ border: 'solid cyan 3px' }}>
            DecentraBank{' '}
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
          {/* Image can go here */}
        </LeftAlignedContainer>
        <RightAlignedContainer>
          <TextBox style={{ border: 'solid red 3px' }}>
            DecentraStock{' '}
            <Text>
              DecentraStock is the ERC20 membership token for DecentraCorp. To
              become an active DecentraCorp member, an account must stake at
              least one DecentraStock for activation. Additional DecentraStock
              can be staked as well to increase a users D-Score. While staked
              DecentraStock does play a factor into a users D-Score it is not
              the main factor for determining D-Score.
            </Text>
          </TextBox>
          {/* Image can go here */}
        </RightAlignedContainer>
        <FullWidthBox style={{ border: 'solid green 3px' }}>
          {/* Text needs to be in container, likely with left padding or margin */}
          D-Scores{' '}
          <Text>
            Members of DecentraCorp all have a D-Score associated with their
            account. This D-Score is used to determine a users trustworthiness
            within the company. D-score is determined using a combination of
            attributes and determines a members voting power, rank/reputation
            and abilities within DecentraCorp. A user's D-score tells both
            customers and other members how trustworthy a member is.
          </Text>
          <Text>
            The D-score is made up of the following factors:   • Jobs: the
            number of D-jobs completed by the member • Reputation: the overall
            average of the rating of each job performed • Stake: the number of
            DecentraStock a member has staked • Verified: the number of times a
            member has been audited • Audit: the number of other members this
            account has audited • Level: a members level is determined by a
            DecentraCorp community by vote
          </Text>
        </FullWidthBox>
        <FullWidthBox>
          Timeline blurb will go here (need to make the text bubble outshoot)
        </FullWidthBox>
      </Wrapper>
    </div>
  );
};

export default FrontPage;
