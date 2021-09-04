import { gql, useQuery } from '@apollo/client';

export const PROPOSAL_DATA = gql`
query Proposal($id: ID!){
    id
    creator
    target
    timeCreated
    executed 
    proposalPassed
    proposalHash
    callData
}
`