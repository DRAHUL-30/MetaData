import React from 'react';
import {mintNFT} from "./mint-nft";

const InteractwithSmartContract = () => {

    const callContract = async() => {
        console.log("callContract");
        let res = await mintNFT();
        console.log(res, "response");
    };

  return (
    <div>
        <button onClick={()=>callContract()}>callContract</button>
    </div>
  )
}

export default InteractwithSmartContract