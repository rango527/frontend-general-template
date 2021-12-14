import React, { useState } from 'react';
import { useSession } from 'next-auth/client';
import { Alert, Modal } from 'reactstrap';
import { connectWallet } from '../../utils/config/connectWallet';
import styles from './order-des.module.scss';
import axios from 'axios';
import { URL, OWNER_ID } from '../../utils/config/server-config';
 
const OrderDescription = ({ order }) => {
  console.log(order);
  const [session, loading] = useSession();
  const [isConnected, setConnectedStatus] = useState(false);
  const [walletAddress, setWallet] = useState('');
  const [connectionErr, setConnectionErr] = useState(null);

  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(false);
  const [mint_response, set_mint_response] = useState(null);

  const doConnectWallet = async () => {
    let response = await connectWallet();
    console.log(response, 'check metamask');
    if (response.connectedStatus) {
      setConnectedStatus(response.connectedStatus);
      setWallet(response.address[0]);
      setConnectionErr(null);
    } else {
      setConnectedStatus(response.connectedStatus);
      setWallet('');
      setConnectionErr(response.status);
      alert(response.status);
    }
  };

  const doMint = async () => {
    if (!walletAddress) {
      alert('Connect Your Wallet');
      return;
    }
    let data = {
      product_id: order?.items[0].product?._id,
      address: walletAddress,
    };
    try {
      set_loading(true);
      let response = await axios.post(
        `${URL}/subscriber/shopping/mint/erc721`,
        data,
        {
          headers: {
            Authorization: `Bearer ${session?.user?.email}`,
          },
        }
      );
      console.log(response.data, 'mint _ data');
      set_mint_response(response.data);
      set_loading(false);
    } catch (e) {
      set_loading(false);
      set_server_err('Some Server Error');
      console.log(e, 'errrrrrrrrrrrrr');
    }
  };

  const doOpenInWindow = ipfs_link => {
    var myWindow = window.open(
      `https://gateway.pinata.cloud/ipfs/${ipfs_link}`,
      '',
      'width=500,height=400'
    );
  };

  return (
    <div className={styles.order_des_container}>
      <>
        {connectionErr ? <Alert color='danger'>{connectionErr}</Alert> : ''}
        <div className={styles.title_container}>
          <h1>{order?.items[0]?.product?.name}</h1>
        </div>

        <div className={styles.mint_btn_container}>
          <button
            disabled={is_loading ? 'disabled' : ''}
            onClick={doMint}
            className='btn btn-dark'
          >
            {is_loading ? 'Loading...' : 'Mint Your NFT'}
          </button>

          <button
            onClick={() => doConnectWallet()}
            className={styles.btn_shadow + ' btn'}
          >
            <img src='/Assets/meta.png' />
            {isConnected ? 'Connected with MetaMask' : 'Mint with Metamask'}
          </button>
          <button className={styles.btn_shadow + ' btn'}>
            <img src='/Assets/coinbase.png' />
            Mint with Coinbase Wallet
          </button>
        </div>
        <div className={styles.views_btn_container}>
          <div className={styles.view_item}>
            <img src='/Assets/eth.png' />
            <p>View on Etherscan</p>
            <img src='/Assets/send.png' />
          </div>
          <div className={styles.view_item}>
            <img src='/Assets/ipfs.png' />
            <p>View on IPFS</p>
            <img src='/Assets/send.png' />
          </div>
          <div
            onClick={() => doOpenInWindow(order?.items[0]?.product?.ipfs_link)}
            className={styles.view_item}
          >
            <img src='/Assets/ipfs_md.png' />
            <p>View IPFS Metadata</p>
            <img src='/Assets/send.png' />
          </div>
        </div>
      </>

      <Modal centered isOpen={mint_response ? true : false}>
        <div style={{ padding: '2rem' }}>
          <img
            onClick={() => set_mint_response(null)}
            style={{
              maxWidth: '15px',
              marginBottom: '2rem',
              cursor: 'pointer',
            }}
            src='/Assets/times-solid.svg'
          />
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h6>Token ID</h6>
            <p>{mint_response?.Id}</p>
          </section>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h6>Address</h6>
            <p>{mint_response?.address}</p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default OrderDescription;
