import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/DBlogo.svg';
import { Nav, WalletBtn, Wrapper, LogoWrapper, Title } from './Style';



export function NavBar() {

    console.log('object')

    return (
        <Wrapper>
            <NavLink to='/'>
                <LogoWrapper src={Logo} alt='DB Logo' />
            </NavLink>
                <Title>DecentraBank</Title>
            <NavLink to='/bank'>
                <Nav>DecentraStock</Nav>
            </NavLink>
            <NavLink to='/membership'>
                <Nav>Membership</Nav>
            </NavLink>
            <NavLink to='/dao'>
                <Nav>DecentraCorp DAO</Nav>
            </NavLink>
            <WalletBtn>Connect Wallet</WalletBtn>
        </Wrapper>
    )
}