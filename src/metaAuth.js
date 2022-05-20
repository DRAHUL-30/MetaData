import React, { useEffect } from 'react';
import {ethers} from "ethers";

export const MetaMaskAuth = () => {

    //connect metamask to our site, Get the users address
    var account = '0xFEC59474C770cD83ecFd2898ff5396a7436DD087';
    var signature = null;
    var message = "Signing message in wallet";

    const wallet = async() => {
        if(window.ethereum) {
            console.log("first if");
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = await provider.getSigner();
                console.log(signer,"signer");
                const accounts = await provider.listAccounts();
                console.log(accounts,"accounts");
                signature = await signer.signMessage(message, account);
                console.log(signature,"signature")
                const ecRecover = ethers.utils.verifyMessage(message, signature);
                console.log(ecRecover,"ecRecover")
                // await window.ethereum.request({ method: 'eth_requestAccounts'});
                // const provider = new ethers.providers.Web3Provider(window.ethereum);
                // const account = await provider.listAccounts();
                // account = account[0];
        }
    }

    async function signMessage() {
        console.log("signMessage");
        signature = await window.ethereum.request({ method: 'eth_sign', params: [account, message]});
        console.log(signature, "signature");
    }

  return (
    <div>
    <h1>{account}</h1>
    <button onClick={wallet}>Wallet</button>
    <button onClick={signMessage}>Sign message</button>
    </div>
  )
}
