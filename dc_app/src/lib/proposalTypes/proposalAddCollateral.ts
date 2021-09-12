import { Interface } from "@ethersproject/abi";
import { ethers } from "ethers";


export function AddCollateral(){
    const abi = [{name: "addNewCollateralType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"}]
    const iface = new ethers.utils.Interface(abi)
    let callData = iface.encodeFunctionData("addNewCollateralType")
    return callData 
}