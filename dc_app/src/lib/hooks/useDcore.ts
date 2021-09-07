// - Web3 Imports 
import { ethers } from "ethers";

// - Contract Imports 
import { useDContracts } from "../contracts/contracts";
import { Maybe, NewProposal, Quorum, Vote } from "../utils/types";

export function UseDcore () {

    const contracts = useDContracts();

    //- Proposal Core Function Calls

    const _newProposal = async (
		params: NewProposal,
	) => {
		console.log( params._proposalHash, params._callData, 'line 19 useDbank Hook')

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await contracts!.DCore.newProposal(
                '0xfb821d4BD0027E80282F6F16E7550F9Ee8D21645',
                params._proposalHash,
                params._callData,				
			);
		} catch (e: any) {
			console.error(e);
			if (e.code === 4001) {
				throw Error(`Transaction rejected by your wallet`);
			}
			throw Error(`Failed to submit transaction.`);
		}

		return tx;
	};

    const _newQuorum = async (
		params: Quorum,
	) => {
		console.log(params._quorum, 'line 39 useDbank Hook')

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await contracts!.DCore.setQuorum(
               		params._quorum
			);
		} catch (e: any) {
			console.error(e);
			if (e.code === 4001) {
				throw Error(`Transaction rejected by your wallet`);
			}
			throw Error(`Failed to submit transaction.`);
		}

		return tx;
	};

    const _vote = async (
		params: Vote,
	) => {
		console.log(params._proposalID, 'line 69 useDbank Hook')

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await contracts!.DCore.setQuorum(
               		params._proposalID,
                    
			);
		} catch (e: any) {
			console.error(e);
			if (e.code === 4001) {
				throw Error(`Transaction rejected by your wallet`);
			}
			throw Error(`Failed to submit transaction.`);
		}

		return tx;
	};

    


   
  
 return {_newProposal,_newQuorum,_vote}
}