import {DropdownContainer, DropdownBox, P, Input, CenterImage, AltP, SwapBtn, Wrapper} from './Style';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';




//interface CreateNewProposalViewProps {
//Props Here
//}


export default function CreateNewProposalView(){

return (
    <Wrapper>
    <DropdownContainer>
            <P>Input 1</P>
                <DropdownBox>
                    {/* <DropdownMenu setCurrent={setCurrentFromCurrency} /> */}
                    <Input placeholder='Value' onChange={(e: React.FormEvent<HTMLInputElement>) => console.log(e)}/>
                </DropdownBox>
                <P>InputBox 2</P>
                <DropdownBox>
                    {/* <DropdownMenu setCurrent={setCurrentToCurrency} /> */}
                    <Input placeholder='Value' onChange={(e: React.FormEvent<HTMLInputElement>) => console.log(e)} />
                </DropdownBox>
                <SwapBtn>Create Proposal</SwapBtn>
            </DropdownContainer>
            </Wrapper>
)
}