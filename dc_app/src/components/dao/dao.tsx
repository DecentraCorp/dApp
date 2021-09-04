import React from 'react'
import { daostyle } from '../../styles'
import { ApolloQueryResult, gql, useLazyQuery, useQuery } from '@apollo/client';
import { PROPOSAL_DATA } from '../../lib/queries/proposalQueries';

export default function Dao() {

    const { loading, error, data } = useQuery(PROPOSAL_DATA);   
   console.log(data, 'proposal data')
   console.log(loading, 'line 10 dao')

    return (
        <div style={daostyle}>
           {data}
            I am a daopage
        </div>
    )
}

