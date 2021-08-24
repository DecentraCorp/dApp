

export function UseDdollar () {
    
    const _mintDD = (_to: any, _amount: any) => {
        // if(contracts.isJust()) {
        // contracts.value.D.mintDD(_to,amount).then((txr: any) => {
        //     let _tx = txr.wait(1);
        //     console.log(_tx, 'line 9 useDdollar Hook tx Successful')
        // }).catch((err: any) => {
        //     console.log(err, 'Failed line 11 useDdollar Hook')
        // })
        // }
    }

    const _burnDD = (_from: any, _amount: any) => {
        // if(contracts.isJust()) {
        // contracts.value.D.burnDD(_to,amount).then((txr: any) => {
        //     let _tx = txr.wait(1);
        //     console.log(_tx, 'line 20 useDdollar Hook tx Successful')
        // }).catch((err: any) => {
        //     console.log(err, 'Failed line 22 useDdollar Hook')
        // })
        // }
    }

    return {_mintDD, _burnDD}
}