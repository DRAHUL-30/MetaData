import React from 'react';
import './App.css';
import WalletCard from './WalletCard';
import InteractwithSmartContract from "./InteractwithSmartContract";
import "bootstrap/dist/css/bootstrap.min.css";
import {MetaMaskAuth} from "./metaAuth";

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
    <MetaMaskAuth />
    {/* <WalletCard /> */}
    {/* <InteractwithSmartContract /> */}
    </header>
  </div>
  )
}

export default App;
