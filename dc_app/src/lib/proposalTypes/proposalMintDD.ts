import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';


export async function MintDD(){
    const Web3 = require("web3");
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));

    const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();
    let val = ethers.utils.parseEther("1");
    let encodedProposalDataMint = await web3.eth.abi.encodeFunctionCall(
        {
          name: "proxyMintDD",
          type: "function",
          inputs: [
            {
              type: "address",
              name: "_to",
            },
            {
              type: "uint256",
              name: "_amount",
            },
          ],
        },
        [account, val]
      );
}