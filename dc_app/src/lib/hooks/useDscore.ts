import { ethers } from "ethers";
import { StakeMembership, Maybe, IncreaseScore, CalculateVotingPower, StakeCheck, GetDScore } from "lib/utils/types";
import { useDContracts } from "../contracts/contracts";

export function UseDscore () {
    const DScore = useDContracts()?.Dscore;

    const _stakeMembership = async (
        params: StakeMembership,
        _stakeAmount: any): Promise<ethers.ContractTransaction> => {
        let tx: Maybe<ethers.ContractTransaction>;
        try {
            tx = await DScore!.stakeMembership(params._stakeAmount);
        } catch (err: any) {
            if (err.code === 4001) {
                throw Error('Transaction rejected by your wallet');
            } else {
                throw Error('Failed to submit transaction.')
            }
        }
        return tx;
    }

    // ** @dev _factors =
    //  0 - Level: a members level is determined by the DecentraCorp community as a way of rewarding members for non
    //   D-job related tasks such as a technical task, community service, or other work related reward.
    //   1 - Jobs: the number of completed jobs done by the member.
    //   2 - Votes: the number of DecentraCorp votes the member has participated in.
    //   3 - Reputation: the overall average of the rating of each job performed.
    //   4 - Staked: the number of DercentraStock a member has staked
    //   5 - Verified: number of times this member has been audited by other members
    //   6 - Audit: number of other members this account has audited
    const _increaseScore = async (
        params: IncreaseScore,
        _member: any, 
        _factor: any, 
        _amount: any): Promise<ethers.ContractTransaction> => {
         let tx: Maybe<ethers.ContractTransaction>;
         try {
             tx = await DScore!.increaseDScore(
                 params._member,
                 params._factor,
                 params._amount
             )
         } catch (err: any) {
             if (err.code === 4001) {
                 throw Error('Transaction was denied by your wallet');
             } else {
                 throw Error('Your transaction failed');
             }
         }
         return tx;
    }

    const _calculateVotingPower = async (
        params: CalculateVotingPower,
        _member: string
        ): Promise<ethers.ContractTransaction> => {
        let tx: any;
        try {
            tx = await DScore!.calculateVotingPower(
                params._member,
            )
        } catch(err: any) {
            if (err.code === 4001) {
                throw Error('Your transaction was refused by your wallet');
            } else {
                throw Error('Your transaction failed');
            }
        }
        return tx;
    }

    const _stakeCheck = async (
        params: StakeCheck,
        _member: any
        ): Promise<ethers.ContractTransaction> => {
        let tx: any;
        try {
            tx = await DScore!.checkStaked(
                params._member
            )
        } catch (err: any) {
            if (err.code === 4001) {
                throw Error('Transaction was refused by your wallet');
            } else {
                throw Error('Transaction failed')
            }
        }
        return tx;
    }

    const _getDScore = async (
        params: GetDScore,
        _member: any
    ): Promise<ethers.ContractTransaction> => {
        let tx: any;
        try {
            tx = await DScore!.getDscore(
                params._member
            )
        } catch (err: any) {
            if (err.code === 4001) {
                throw Error('Transaction was refused by your wallet');
            } else {
                throw Error('Transaction failed.')
            }
        } 
        return tx;
    }

    return { _stakeMembership, _increaseScore, _calculateVotingPower, _stakeCheck, _getDScore }
}