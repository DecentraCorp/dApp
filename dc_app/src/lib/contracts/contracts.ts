import React from "react";
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import addresses from './address';
import { Maybe } from 'true-myth';
import { chainIdToNetworkType } from './networks';
import {DecentraCore__factory} from '../../../../types/ethers-contracts/factories/DecentraCore__factory';
import { DecentraCore } from "../../../../types/ethers-contracts/DecentraCore";


export interface ContractAddresses {
    DecentraStock: string;
    DecentraDollar: string; 
    DScore: string;
    DecentraCore: string;
    DecentraBank: string;

}

export interface Contracts {
  DecentraCore: DecentraCore;
}

function useDContracts(): Maybe<Contracts> {
  const context = useWeb3React<Web3Provider>();
  const { library, account, active, chainId } = context;
  const contracts = useMemo((): Maybe<Contracts> => {
    if (!active || !library) return Maybe.nothing();
    return Maybe.of({
      DecentraCore: DecentraCore__factory.connect(
        addresses[chainIdToNetworkType(chainId!)].DecentraCore,
        library.getSigner(),
      ),
    });
  }, [active, library, account]);
  return contracts;
}

export { useDContracts };