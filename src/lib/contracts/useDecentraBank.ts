import React from "react";
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import addresses from './address';
import { Maybe } from 'true-myth';
import { chainIdToNetworkType } from './networks';
import {DecentraBank__factory} from '../../../types/ethers-contracts/factories/DecentraBank__factory';
import { DecentraBank } from "../../../types/ethers-contracts/DecentraBank";


export interface ContractAddresses {
    DecentraCore: string;
    DecentraBank: string;

}

export interface Contracts {
    DecentraBank: DecentraBank;
}

function useDBankContracts(): Maybe<Contracts> {
  const context = useWeb3React<Web3Provider>();
  const { library, account, active, chainId } = context;
  const contracts = useMemo((): Maybe<Contracts> => {
    if (!active || !library) return Maybe.nothing();
    return Maybe.of({
      DecentraBank: DecentraBank__factory.connect(
        addresses[chainIdToNetworkType(chainId!)].DecentraBank,
        library.getSigner(),
      ),
    });
  }, [active, library, account]);
  return contracts;
}

export { useDBankContracts };