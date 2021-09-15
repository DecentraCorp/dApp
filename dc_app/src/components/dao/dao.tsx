import React from 'react'
import { daostyle, stake, createProposal, BOX, createProposalBox, stakeBox, proposalData, proposalBox } from '../../styles'
import { ApolloQueryResult, gql, useLazyQuery, useQuery } from '@apollo/client';
import { PROPOSAL_DATA } from '../../lib/queries/proposalQueries';
import Modal from 'antd/lib/modal/Modal';

import { UseDcore } from '../../lib/hooks/useDcore';
import { UseDscore } from 'lib/hooks/useDscore';
import { BigNumber, ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { useMintDD } from 'lib/proposalTypes/proposalMintDD';
import { useIpfsSummary } from 'lib/hooks/useIpfsSummary';

import { Table, Tag, Space } from 'antd';
import SimpleOptionDropdown from 'components/Dropdowns/SimpleOptionDropdown/SimpleOptionDropdown';



export default function Dao() {


  
  const { loading, error, data } = useQuery(PROPOSAL_DATA);   
   console.log(data, 'proposal data')
   console.log(loading, 'line 10 dao')

   const context = useWeb3React<Web3Provider>();
   const { account,active } = useWeb3React();

  //- Hooks
  const _ipfs = useIpfsSummary()
  const dCore = UseDcore()
  const dScore = UseDscore()
  const pTypeMintDD = useMintDD();

  const Web3 = require("web3");

    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));

  const [stakeAmount, setStakeAmount] = React.useState<any>('')
  const [propType, setPropType] = React.useState<any>('')
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<any>('')
  const [_Data, setData] = React.useState<any>('')
  const [proxyMintAmount, setProxyMintAmount] = React.useState<string>('')
  const [ethAddress, setEthAddress] = React.useState<string>('')
  const [tokenAddress, setTokenAddress] = React.useState('')


   ///////////////
 // Web3 Functions //
	///////////////
  const proxyMintDD = async () => {
    // todo add notification here
  if(!active){
    alert('connect wallet before selecting proposal type')
  }
  let val = ethers.utils.parseUnits(proxyMintAmount, 'ethers')
  let encodedProposalDataMintDD = await web3.eth.abi.encodeFunctionCall(
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
    [ethAddress, val]
  );
  return encodedProposalDataMintDD
    }

  const proxyBurnDD = async () => {
    if(!active){
      alert('connect wallet before selecting proposal type')
    }
    let encodedProposalDataBurnDD = web3.eth.abi.encodeFunctionCall({
      name: "proxyBurnDD",
      type: "function",
      "inputs": [
        {
         
          "name": "_from",
          "type": "address"
        },
        {
       
          "name": "_amount",
          "type": "uint256"
        }
      ],     
    }, [ethAddress, proxyMintAmount]
    )
    }
  
  const proxyMintDS = async () => {
    if(!active){
      alert('connect wallet before selecting proposal type')
    }
    let encodedProposalDataMintDS = await web3.eth.abi.encodeFunctionCall({
      name: "proxyMintDS",
      type: "function",
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
    },[ethAddress, proxyMintAmount]
     );
  }

  const proxyBurnDS = async () => {
    if(!active){
      alert('connect wallet before selecting proposal type')
    }
    let encodedProposalDataBurnDS = await web3.eth.abi.encodeFunctionCall(  {
      name: "proxyBurnDS",
      type: "function",
      "inputs": [
        {
     
          "name": "_from",
          "type": "address"
        },
        {
         
          "name": "_amount",
          "type": "uint256"
        }
      ],
    }, [ethAddress,proxyMintAmount]
    )
  }

  const proxyAddCollateral = async () => {
    if(!active){
      alert('connect wallet before selecting proposal type')
    } 
    let encodedProposalDataAddCollateral = await web3.eth.abi.encodeFunctionData({
      name: "addNewCollateralType",
      type: "function",
      "inputs": [
        {
          "name": "_collateral",
          "type": "address"
        }
      ], 
    },[tokenAddress]
    )
  }

  const proxywidthdrawFunds = async () => {
    if(!active){
      alert('connect wallet before selecting proposal type')
    }
    let encodedProposalDataWidthdraw = await web3.eth.abi.encodeFunctionCall({
      name: "fundWithdrawl",
      type: "function",
      "inputs": [
        { 
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_type",
          "type": "uint256"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ], 
    },[ethAddress, ethAddress, proxyMintAmount]
    )
  }





  const handleCreate = async (_calldata: any) => {
    if(!active){
      alert('please connect your wallet')
    } else
   await _ipfs.ipfsSummary(
       title,description,propType, _calldata
      )
  }

  const handleStake = async () => {
   const tx = await dScore._stakeMember({ _stakeAmount: ethers.utils.parseUnits(stakeAmount, 'ether')})
   return tx
  }

  const dataSource = [
    {
      key: '1',
  
    },
    {
      key: '2',
      
    },
  ];
  
  const columns = [
    {
      title: 'Proposals',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  const handleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }




    return (
        <>
     
    
        <div style={BOX as React.CSSProperties}>
          
            <div style={createProposal as React.CSSProperties}>
            <SimpleOptionDropdown
            customHeaderText={'Select a proposal type'}
		  	        style={{ width: 100 }}
		  	        options={['mint', 'widthdraw funds', 'addNewCollateralType']}
		  	        onSelect={(option: string) => setPropType(option)}
			          label={'Type of Proposal'}
		        />
                <div style={createProposalBox as React.CSSProperties} >
                    <input placeholder='Proposal Title' onChange={handleChange}  />
                    <textarea placeholder='Proposal Description' onChange={handleDescriptionChange}  />
                    <button onClick={handleCreate}>Create Proposal</button>
                </div>
                <Table dataSource={dataSource} columns={columns} />
            </div>

     
           
     
       

           
            {/* <div  style={stake as React.CSSProperties}>
                <div style={stakeBox as React.CSSProperties}>
            <input   />
            <button onClick={handleStake}>
				Stake member
			</button>
            </div>
            </div> */}
          
        </div>
     
        </>
    )
}

 