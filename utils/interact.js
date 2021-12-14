// import {pinJSONToIPFS} from './pinata.js'
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 
const contractABI = require('./contract-abi.json')
const contractAddress = "0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE";



export const mintNFT = async(url, name, description) => {
    // //error handling
    // if (url.trim() == "" || (name.trim() == "" || description.trim() == "")) { 
    //     return {
    //         success: false,
    //         status: "❗Please make sure all fields are completed before minting.",
    //     }
    // }
  
    //make metadata
    // const metadata = new Object();
    // metadata.name = name;
    // metadata.image = url;
    // metadata.description = description;

    // //pinata pin request
    // const pinataResponse = await pinJSONToIPFS(metadata);
    // if (!pinataResponse.success) {
    //     return {
    //         success: false,
    //         status: "😢 Something went wrong while uploading your tokenURI.",
    //     }
    // } 
    const tokenURI = "Qmc4gDN3BsqPRR76Wtiv8AHQei84EfLLnKcdWBgjZFdZ2K";  

    //load smart contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);//loadContract();

    //set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI() //make call to NFT smart contract 
    };
  
    //sign transaction via Metamask
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
}


export const connectWallet = async () => {
    if (window.ethereum) { //check if Metamask is installed
          try {
              const address = await window.ethereum.enable(); //connect Metamask
              const obj = {
                      connectedStatus: true,
                      status: "",
                      address: address
                  }
                  return obj;
          } catch (error) {
              return {
                  connectedStatus: false,
                  status: "🦊 Connect to Metamask using the button on the top right."
              }
          }
    } else {
          return {
              connectedStatus: false,
              status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
          }
        } 
  };