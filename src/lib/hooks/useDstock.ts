

export function UseDstock () {

    const _issueStock = (_to: any, _amount: any) => {
        // if(contracts.isJust()) {
        // contracts.value.D.issueStock(_to,amount).then((txr: any) => {
        //     let _tx = txr.wait(1);
        //     console.log(_tx, 'line 9 useDstock Hook tx Successful')
        // }).catch((err: any) => {
        //     console.log(err, 'Failed line 11 useDstock Hook')
        // })
        // }
    }

    const _burnStock = (_from: any, _amount: any) => {
        // if(contracts.isJust()) {
        // contracts.value.D.burnStock(_from,amount).then((txr: any) => {
        //     let _tx = txr.wait(1);
        //     console.log(_tx, 'line 20 useDstock Hook tx Successful')
        // }).catch((err: any) => {
        //     console.log(err, 'Failed line 22 useDstock Hook')
        // })
        // }
    }


    return {_issueStock, _burnStock}
}