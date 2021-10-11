import { useState } from 'react';
import {DropdownContainer, DropdownBox, P, Span, SwapBtn, Wrapper} from './Style';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';




//interface CreateNewProposalViewProps {
//Props Here
//}


export default function CreateNewProposalView(){
    const [proposalType, setProposalType] = useState<any>();

    const proposalTypes = [
        {value: 'mint', label: <Span>Mint</Span>},
        {value: 'generic', label: <Span>Generic</Span>},
        {value: 'burn', label: <Span>Burn</Span>},
        {value: 'empty', label: <Span></Span>}
    ];



return (
    <Wrapper>
    <DropdownContainer>
            <P>Type of proposal</P>
                <DropdownBox>
                    <DropdownMenu setCurrent={setProposalType} options={proposalTypes} wide />
                    {/* <Input placeholder='Value' onChange={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}/> */}
                </DropdownBox>
                <SwapBtn>Create Proposal</SwapBtn>
            </DropdownContainer>
            </Wrapper>
)
}