import React from 'react';
import { AddNewBtn, InfoBox, InfoDisplayWrapper, InfoHeader, InfoSecondary, ProposalsDisplay, WhiteDisplay, Wrapper, ProposalRow, ProposalTitle, LeftProposalRow, StatusBox, ProposalDetails, Indicator, IndicatorImage } from './Style'
import active from '../../assets/ActiveClock.svg';

export default function Dao() {
    return (
        <Wrapper>
            <AddNewBtn>Add New Proposal</AddNewBtn>
            <InfoDisplayWrapper>
                <InfoBox>
                    <InfoHeader>Active Proposals</InfoHeader>
                    <InfoSecondary>1</InfoSecondary>
                </InfoBox>
                <InfoBox>
                    <InfoHeader>Voting Addresses</InfoHeader>
                    <InfoSecondary>100</InfoSecondary>
                </InfoBox>
                <InfoBox>
                    <InfoHeader>Votes Delegated</InfoHeader>
                    <InfoSecondary>2000</InfoSecondary>
                </InfoBox>
            </InfoDisplayWrapper>
            <ProposalsDisplay>
                <WhiteDisplay>Proposals</WhiteDisplay>
                <ProposalRow>
                    <LeftProposalRow>
                        <ProposalTitle>Proposal 1</ProposalTitle>
                        <StatusBox active>ACTIVE</StatusBox>
                    </LeftProposalRow>
                        <ProposalDetails>#01 Executed November 12th, 2021</ProposalDetails>
                        <IndicatorImage src={active} />
                    <Indicator>ACTIVE</Indicator>
                </ProposalRow>
                <ProposalRow>
                    <LeftProposalRow>
                    <ProposalTitle>Proposal 2</ProposalTitle>
                        <StatusBox passed>PASSED</StatusBox>
                    </LeftProposalRow>
                </ProposalRow>
                <ProposalRow>
                    <LeftProposalRow>
                        <ProposalTitle>Proposal 3</ProposalTitle>
                        <StatusBox rejected>Rejected</StatusBox>
                    </LeftProposalRow>
                </ProposalRow>
            </ProposalsDisplay>
        </Wrapper>
    )
}