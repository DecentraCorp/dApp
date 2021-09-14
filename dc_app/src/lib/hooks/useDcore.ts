// - Web3 Imports 
import { ethers } from "ethers";
import React from "react";

// - Contract Imports 
import { useDContracts } from "../contracts/contracts";
import { Maybe, NewProposal, Quorum, Vote } from "../utils/types";

export function UseDcore () {

    const contracts = useDContracts();

	//-State
	const [proposalTile, setProposalTitle] = React.useState()
	const [proposalDescription, setProposalDescription] = React.useState()

	//- IPFS 
	//- pass the state of title and desription to the dao page and pass it back into the useDcore hook 
	//- pass the proposalHash into the function call all via the ipfs summary 
	//-call data and proposal hash will be passed through the ipfs summart to then be passed to the proposal contract call
	const ipfsLib = require('ipfs-api');
  	const ipfsClient = new ipfsLib({host: "ipfs.infura.io", port: 5001, protocol: "https"})


	  const ipfsSummary = async ( params: NewProposal) => {
		console.log("submit");
	
		const ipfsRoot = `https://ipfs.io/ipfs/`

		let res = await ipfsClient.add(proposalTile)
    	const titlePath = `${ipfsRoot}${res[0].hash}`;
    	console.log(`proposalTitle is at ${titlePath}`);
	
		const metadataObject = {
		  title: titlePath,
		  description: proposalDescription
		}
	
		const metadataJson = JSON.stringify(metadataObject);
		await ipfsClient.add(Buffer.from(metadataJson));
		const metadataPath = `${ipfsRoot}${res[0].hash}`;
		console.log(`Metadata is at ${metadataPath}`);
	
		_newProposal(params._proposalHash,params._callData);
	  }
	


    //- Proposal Core Function Calls
	const _newProposal = async (
		_proposalHash: any, _callData: any
	) => {
		console.log( _proposalHash, _callData, 'line 19 useDbank Hook')

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await contracts!.DCore.newProposal(
                '0xfb821d4BD0027E80282F6F16E7550F9Ee8D21645',
                _proposalHash,
                _callData,				
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