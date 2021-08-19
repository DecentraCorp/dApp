import React from "react";
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import addresses from './address';
import { Maybe } from 'true-myth';
import { chainIdToNetworkType } from './networks';
import {DecentraDollar__factory} from '../../../types/ethers-contracts/factories/DecentraDollar__factory';
import { DecentraDollar } from "../../../types/ethers-contracts/DecentraDollar";


export interface ContractAddresses {
    DecentraStock: string;
    DecentraDollar: string; 
    DScore: string;
    DecentraCore: string;
    DecentraBank: string;

}

export interface Contracts {
  DecentraDollar: DecentraDollar;
}

function useDdollarContracts(): Maybe<Contracts> {
  const context = useWeb3React<Web3Provider>();
  const { library, account, active, chainId } = context;
  const contracts = useMemo((): Maybe<Contracts> => {
    if (!active || !library) return Maybe.nothing();
    return Maybe.of({
      DecentraDollar: DecentraDollar__factory.connect(
        addresses[chainIdToNetworkType(chainId!)].DecentraDollar,
        library.getSigner(),
      ),
    });
  }, [active, library, account]);
  return contracts;
}

export { useDdollarContracts };