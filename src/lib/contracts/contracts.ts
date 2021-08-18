import React from "react";
// import { Web3Provider } from '@ethersproject/providers';
// import { useWeb3React } from '@web3-react/core';
// import { useMemo } from 'react';
// import addresses from './address';
// import { Maybe } from 'true-myth';
// import { chainIdToNetworkType } from './networks';

// export interface ContractAddresses {
//   mgd: string;
//   orderbook: string
//   dai: string
//   usdc: string
//   maker: string
//   matic: string

// }

// export interface Contracts {
//   mgd: MGD;
// }

// function useMgdContracts(): Maybe<Contracts> {
//   const context = useWeb3React<Web3Provider>();
//   const { library, account, active, chainId } = context;
//   const contracts = useMemo((): Maybe<Contracts> => {
//     if (!active || !library) return Maybe.nothing();
//     return Maybe.of({
//       mgd: MGD__factory.connect(
//         addresses[chainIdToNetworkType(chainId!)].mgd,
//         library.getSigner(),
//       ),
//     });
//   }, [active, library, account]);
//   return contracts;
// }

// export { useMgdContracts };