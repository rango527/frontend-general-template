import React, { useEffect, useState } from 'react';
import transakSDK from '@transak/transak-sdk';
import Web3 from 'web3';
import { Row, Col, Modal } from 'reactstrap';
import styles from './nft-list.module.scss';
import { ADDRESS, ABI } from '../../utils/config/abi';

const NftList = () => {
  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false);

  const [walletAddress, setWalletAddress] = useState(null);

  // FOR MINTING
  const [how_many_bananas, set_how_many_bananas] = useState(1);
  const [success_modal, set_success_modal] = useState(false);
  const [hash, set_hash] = useState(false);

  const [bananaContract, setBananaContract] = useState(null);

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0);

  const [saleStarted, setSaleStarted] = useState(false);

  const [bananaPrice, setBananaPrice] = useState(0);

  useEffect(async () => {
    signIn();
  }, []);

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
    } else {
      alert('No Ethereum interface injected into browser. Read-only access');
    }

    window.ethereum
      .enable()
      .then(function (accounts) {
        window.web3.eth.net
          .getNetworkType()
          // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
          .then(network => {
            console.log(network, 'networkk.................');
            if (network != 'main') {
              // alert(
              //   'You are on ' +
              //     network +
              //     " network. Change network to mainnet or you won't be able to do anything here"
              // );
            }
          });
        let wallet = accounts[0];
        setWalletAddress(wallet);
        setSignedIn(true);
        callContractData(wallet);
      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        console.error(error);
      });
  }
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const bananaContract = new window.web3.eth.Contract(ABI, ADDRESS);
    setBananaContract(bananaContract);

    const salebool = await bananaContract.methods.saleIsActive().call();
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool);

    const totalSupply = await bananaContract.methods.totalSupply().call();
    setTotalSupply(totalSupply);

    const bananaPrice = await bananaContract.methods.bananaPrice().call();
    setBananaPrice(bananaPrice);
  }

  async function signOut() {
    setSignedIn(false);
  }

  async function mintBanana(how_many_bananas) {
    if (bananaContract) {
      const price = Number(bananaPrice) * how_many_bananas;
      const gasAmount = await bananaContract.methods
        .mintBoringBanana(how_many_bananas)
        .estimateGas({ from: walletAddress, value: price });
      // console.log('estimated gas', gasAmount);
      // console.log({ from: walletAddress, value: price });
      // let token_id_res = await bananaContract.methods.tokenURI(data?.token_id).call();
      // console.log(token_id_res  , "token..................")
      bananaContract.methods
        .mintBoringBanana(how_many_bananas)
        .send({ from: walletAddress, value: price, gas: String(gasAmount) })
        .on('transactionHash', function (hash) {
          console.log('transactionHash', hash);
          if (hash) {
            set_hash(hash);
            set_success_modal(true);
          }
        });
    } else {
      console.log('Wallet not connected');
    }
  }

  const data = [
    {
      qty: 1,
      title: '1 PACK',
      desc: '0.09 ETH Per Alpha Betas NFT ',
      price: '0.09 ETH',
    },
    {
      qty: 3,
      title: '3 PACK',
      desc: '0.09 ETH Per Alpha Betas NFT ',
      price: '0.18 ETH',
    },
    {
      qty: 6,
      title: '6 PACK',
      desc: '0.09 ETH Per Alpha Betas NFT ',
      price: '0.27 ETH',
    },
    {
      qty: 9,
      title: '9 PACK',
      desc: '0.09 ETH Per Alpha Betas NFT ',
      price: '0.36 ETH',
    },
  ];

  return (
    <div className={styles.nft_list_container}>
      <section className={styles.header_sec}>
        <h2>
          Mint Your <span>ALPHA BETAS NFT</span>
        </h2>
        <div className={styles.btn_containers}>
          {!signedIn ? (
            <button onClick={signIn} className='btn'>
              CONNECT WALLET
            </button>
          ) : (
            <button onClick={signOut} className='btn'>
              Wallet Connected:
              <span className="d-none d-md-block d-block" style={{marginLeft:"10px"}} >{walletAddress}</span>
            </button>
          )}
          <button className='btn'>
            START MINTING <img src='/Assets/alpha_new/three_arrow.svg' />
          </button>
        </div>
        <p>0.09 ETH Per Alpha Betas NFT </p>
      </section>
      <section className={styles.nft_list_content}>
        <Row>
          {data.map(item => {
            return (
              <Col sm={12} md={6}>
                <div className={styles.nft_item}>
                  <div className={styles.item_body}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                  </div>
                  <button onClick={() => mintBanana(item.qty)} className='btn'>
                    START MINTING
                    <img src='/Assets/alpha_new/three_arrow.svg' />
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </section>
      <Modal
        toggle={() => set_success_modal(false)}
        centered
        isOpen={success_modal}
      >
        <div className='custom-basic-modal p-2 w-100'>
          <h6 className='p-4 text-center'>Check your token on</h6>
          <p className="p-2 text-center" >{hash}</p>
        </div>
      </Modal>
    </div>
  );
};

export default NftList;
