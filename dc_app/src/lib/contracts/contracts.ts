// - React Imports
import React from "react";
import { useMemo } from 'react';

// - Utils
import {Maybe} from 'true-myth';
import addresses from './address';

// - Web3 Import 
import * as ethers from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { chainIdToNetworkType, NETWORK_TYPES } from './networks';

// - Type Imports 
import {DScore__factory} from '../../types/factories/DScore__factory';
import { DScore } from "../../types/DScore";
import {DecentraStock__factory} from '../../types/factories/DecentraStock__factory';
import { DecentraStock } from "../../types/DecentraStock";
import {DecentraDollar__factory} from '../../types/factories/DecentraDollar__factory';
import { DecentraDollar } from "../../types/DecentraDollar";
import {DecentraBank__factory} from '../../types/factories/DecentraBank__factory';
import { DecentraBank } from "../../types/DecentraBank";
import {DecentraCore__factory} from '../../types/factories/DecentraCore__factory';
import { DecentraCore } from "../../types/DecentraCore";


 
export interface ContractAddresses {
    DecentraStock: string;
    DecentraDollar: string; 
    DScore: string;
    DecentraCore: string;
    DecentraBank: string;

}

export interface Contracts {
  DCore: DecentraCore;
  DBank: DecentraBank;
  DDollar: DecentraDollar;
  DStock: DecentraStock;
  DScore: DScore;
}

function useDContracts() : Contracts | null {
	const context = useWeb3React<Web3Provider>();
	const { library, active, chainId } = context;
	const contract = useMemo((): Contracts | null => {
		let contracts;
		let signer: ethers.VoidSigner | ethers.Signer = new ethers.VoidSigner(
			ethers.constants.AddressZero,
		);
		if (!library) {
			contracts = addresses[chainIdToNetworkType(42)];
		} else {
			if (!chainId) {
				console.error(`No chainid detected;`);
				return null;
			}

			contracts = addresses[chainIdToNetworkType(chainId)];
			signer = library.getSigner();
		}

		if (!contracts) {
			console.error(`chain not supported`);
			return null;
		}

		return {
			DCore: DecentraCore__factory.connect(contracts.DecentraCore, signer),
			DBank: DecentraBank__factory.connect(
				contracts.DecentraBank,
				signer,
			),
			DDollar: DecentraDollar__factory.connect(
				contracts.DecentraDollar,
				signer,
			),
			DScore: DScore__factory.connect(contracts.DScore, signer),
			DStock: DecentraStock__factory.connect(contracts.DecentraStock, signer),
		};
	}, [active, library, chainId]);
	return contract;
}

export { useDContracts };