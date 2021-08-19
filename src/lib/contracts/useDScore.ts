import React from "react";
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import addresses from './address';
import { Maybe } from 'true-myth';
import { chainIdToNetworkType } from './networks';
import {DScore__factory} from '../../../types/ethers-contracts/factories/DScore__factory';
import { DScore } from "../../../types/ethers-contracts/DScore";


export interface ContractAddresses {
    DecentraStock: string;
    DecentraDollar: string; 
    DScore: string;
    DecentraCore: string;
    DecentraBank: string;

}

export interface Contracts {
  DScore: DScore;
}

function useDScoreContracts(): Maybe<Contracts> {
  const context = useWeb3React<Web3Provider>();
  const { library, account, active, chainId } = context;
  const contracts = useMemo((): Maybe<Contracts> => {
    if (!active || !library) return Maybe.nothing();
    return Maybe.of({
      DScore: DScore__factory.connect(
        addresses[chainIdToNetworkType(chainId!)].DScore,
        library.getSigner(),
      ),
    });
  }, [active, library, account]);
  return contracts;
}

export { useDScoreContracts };