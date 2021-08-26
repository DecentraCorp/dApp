// - Contract Imports 
import { useDBankContracts } from "../contracts/useDecentraBank"

export function UseDbank () {

    // Contracts
    const contract = useDBankContracts()


    const _purchaseStock = (_amount: any, _tokenType: any) => {
        
    if(contract.isJust()){
        contract.value.DecentraBank.purchaseStock(
            _amount,
            _tokenType
        )
    }

    }

    const _sellStock = (_amount: any) => {

    }
    const _addNewCollateralType = (_collateral: any) => {

    }
    const _fundWithdrawl = (_to: any, _type: any, _amount: any) => {

    }
    const _calculatePoolBal = () => {

    }
    const _calculatePurchase = (_dollarAmount: any) => {

    }
    const _calculateSale = (_stockAmount: any) => {

    }    
    return {}
}