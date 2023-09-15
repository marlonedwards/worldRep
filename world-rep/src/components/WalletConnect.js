import React, { useState } from 'react';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

const WalletConnect = () => {
  const [web3, setWeb3] = useState(null);
  const [isPrimaryWallet, setIsPrimaryWallet] = useState(false); // Track if it's the primary wallet

  const connectWallet = async () => {
    const provider = new WalletConnectProvider({
      infuraId: 'YOUR_INFURA_PROJECT_ID',
    });

    await provider.enable();

    const web3Instance = new Web3(provider);

    setWeb3(web3Instance);

    // After a successful connection, ask if they want to make it their primary wallet
    const confirmPrimary = window.confirm('Do you want to make this your primary game data wallet?');
    if (confirmPrimary) {
      setIsPrimaryWallet(true);
    }
  };

  return (
    <div>
      <h1>WalletConnect Dapp</h1>
      {web3 ? (
        <div>
          <p>Connected to Ethereum!</p>
          {isPrimaryWallet ? (
            <p>This is your primary wallet.</p>
          ) : (
            <button onClick={connectWallet}>Connect to Wallet</button>
          )}
        </div>
      ) : (
        <button onClick={connectWallet}>Connect to Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
