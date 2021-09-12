import React from 'react'
import { daostyle, stake, createProposal, BOX, createProposalBox, stakeBox, proposalData, proposalBox } from '../../styles'
import { ApolloQueryResult, gql, useLazyQuery, useQuery } from '@apollo/client';
import { PROPOSAL_DATA } from '../../lib/queries/proposalQueries';
import Modal from 'antd/lib/modal/Modal';

import { UseDcore } from '../../lib/hooks/useDcore';
import { UseDscore } from 'lib/hooks/useDscore';
import { ethers } from 'ethers';

import { Table, Tag, Space } from 'antd';
import SimpleOptionDropdown from 'components/Dropdowns/SimpleOptionDropdown/SimpleOptionDropdown';

export default function Dao() {

    const { loading, error, data } = useQuery(PROPOSAL_DATA);   
   console.log(data, 'proposal data')
   console.log(loading, 'line 10 dao')

   // Contracts
  const dCore = UseDcore()
  const dScore = UseDscore()

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [stakeAmount, setStakeAmount] = React.useState<any>('')

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};


  const handleCreate = () => {
      dCore._newProposal({
        _proposalHash: '',
        _callData: ''
      })
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





    return (
        <>
     
    
        <div style={BOX as React.CSSProperties}>
          
            <div style={createProposal as React.CSSProperties}>
            <SimpleOptionDropdown
            customHeaderText={'Select a proposal type'}
		  	        style={{ width: 100 }}
		  	        options={['mint', 'widthdraw funds', 'addNewCollateralType']}
		  	        onSelect={(option: string) => setStakeAmount(option)}
			          label={'Type of Proposal'}
		        />
                <div style={createProposalBox as React.CSSProperties} >
                    <input   />
                    <input   />
                    <input   />
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

 