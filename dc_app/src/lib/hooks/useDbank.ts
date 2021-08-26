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
        ).then(async (txr: any) => {
                let _tx = await txr.wait(1);
                console.log(_tx, 'Stock Purchased')
            }).catch((err: any) => {
                let _er = err
                console.log(_er, 'Failed to purchase stock')
            })
    }

    }


    const _sellStock = (_amount: any) => {
        if(contract.isJust()){
            contract.value.DecentraBank.sellStock(
                _amount
            ).then(async (txr: any) => {
                    let _tx = await txr.wait(1);
                    console.log(_tx, 'Stock Sold')
                }).catch((err: any) => {
                    let _er = err
                    console.log(_er, 'Failed to sell stock')
                })
        }

    }


    const _addNewCollateralType = (_collateral: any) => {
        if(contract.isJust()){
            contract.value.DecentraBank.addNewCollateralType(
                _collateral
            ).then(async (txr: any) => {
                    let _tx = await txr.wait(1);
                    console.log(_tx, 'New Collateral Added')
                }).catch((err: any) => {
                    let _er = err
                    console.log(_er, 'Failed to add collateral')
                })
        }

    }


    const _fundWithdrawl = (_to: any, _type: any, _amount: any) => {
        if(contract.isJust()){
            contract.value.DecentraBank.fundWithdrawl(
                _to,
                _type,
                _amount
            ).then(async (txr: any) => {
                    let _tx = await txr.wait(1);
                    console.log(_tx, 'Success')
                }).catch((err: any) => {
                    let _er = err
                    console.log(_er, 'Failed to withdraw')
                })
        }

    }


    const _calculatePoolBal = () => {
        if(contract.isJust()){
            contract.value.DecentraBank.calculatePoolBal() }
    }


    const _calculatePurchase = (_dollarAmount: any) => {
        if(contract.isJust()){
            contract.value.DecentraBank.calculatePurchase(
                _dollarAmount
            ).then(async (txr: any) => {
                    let _tx = await txr.wait(1);
                    console.log(_tx, 'Success')
                }).catch((err: any) => {
                    let _er = err
                    console.log(_er, 'Failed')
                })
        }
    }


    const _calculateSale = (_stockAmount: any) => {
        if(contract.isJust()){
            contract.value.DecentraBank.calculateSale(
                _stockAmount
            ).then(async (txr: any) => {
                    let _tx = await txr.wait(1);
                    console.log(_tx, 'Success')
                }).catch((err: any) => {
                    let _er = err
                    console.log(_er, 'Failed to withdraw')
                })
        }

    }  
    
    
    return {_purchaseStock, _sellStock, _addNewCollateralType, _fundWithdrawl, _calculatePoolBal, _calculatePurchase, _calculateSale}
}