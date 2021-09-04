// - Web3 Imports 
import { ethers } from "ethers";

// - Contract Imports 
import { useDContracts } from "../contracts/contracts";
import { Maybe, NewProposal } from "../utils/types";

export function UseDcore () {

    const contracts = useDContracts();


    const _newProposal = async (
		params: NewProposal,
	) => {
		console.log(params._target, params._proposalHash, params._callData, 'line 19 useDbank Hook')

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await contracts!.DCore.newProposal(
                params._target,
                params._proposalHash,
                params._callData,
				
				{value: "0x0000000000000000000000000000000000000000"}
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
   
  
 return 
}