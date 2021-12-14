import React, { useState, useEffect } from 'react';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import styles from '../styles/walletconnect.module.scss';

const WalletConnectScreen = () => {
  const [isConnected, setConnectedStatus] = useState(false);
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    console.log(walletResponse, 'wewewewewewew');
    setConnectedStatus(walletResponse.connectedStatus);
    setStatus(walletResponse.status);
    if(walletResponse?.address && walletResponse?.address[0]){
        setWallet(walletResponse?.address[0]);
    }
    // if (isConnected) {
    //   setWallet(walletAddress[0]);
    // }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        // let provider = new window.ethereum.providers.Web3Provider(ethereum);
        console.log(provider, 'oooooooooooooooooooooo');
        const obj = {
          connectedStatus: true,
          status: '',
          address: address,
        };
        return obj;
      } catch (error) {
        console.log(error , "s")
        return {
          connectedStatus: false,
          status: '🦊 Connect to Metamask using the button on the top right.',
        };
      }
    } else {
      return {
        connectedStatus: false,
        status:
          '🦊 You must install Metamask into your browser: https://metamask.io/download.html',
      };
    }
  };


  // Create a connector
// const connector = new WalletConnect({
//     bridge: "https://bridge.walletconnect.org", // Required
//     qrcodeModal: QRCodeModal,
//   });
  
//   // Check if connection is already established
//   if (!connector.connected) {
//       console.log(connector)
//     // create new session
//     connector.createSession();
//   }
  
//   // Subscribe to connection events
//   connector.on("connect", (error, payload) => {
//     if (error) {
//       throw error;
//     }
  
//     // Get provided accounts and chainId
//     const { accounts, chainId } = payload.params[0];
//     console.log(payload , "uououo")
//   });
  
//   connector.on("session_update", (error, payload) => {
//     if (error) {
//       throw error;
//     }
  
//     // Get updated accounts and chainId
//     const { accounts, chainId } = payload.params[0];
//   });
  
//   connector.on("disconnect", (error, payload) => {
//     if (error) {
//       throw error;
//     }
  
//     // Delete connector
//   });
  return (
    <div className={styles.wallet_connect_container}>
      {isConnected ? (
        <p>{String(walletAddress)}</p>
      ) : (
        <button onClick={connectWalletPressed}>Connect</button>
      )}
      <p className="text-danger" >{status}</p>
    </div>
  );
};

export default WalletConnectScreen;
