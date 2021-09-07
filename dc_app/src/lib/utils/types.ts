
//- Decentra Bank
export interface PurchaseStock {
    _amount: any
    _tokenType: any
}

export interface SellStock {
    _amount: any
}

export interface AddCollateral {
    _collateral: string | any
}

export interface FundWithdrawl {
    _to: any
    _type: any
    _amount: any
}

export interface CalculatePurchase {
    _dollarAmount: any
}

export interface CalculateSale {
    _stockAmount: any
}

//- Decentra Core
export interface NewProposal {
// _target: any
_proposalHash: any
_callData: any
}

export interface Quorum {
    _quorum: any
}

export interface Vote {
    _proposalID: any,
}



export type Maybe<T> = T | undefined | null;
