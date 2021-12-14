import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Modal, ModalHeader } from 'reactstrap';
import { useRouter } from 'next/router';
import styles from './prod-des.module.scss';

const ProdDescription = ({ data }) => {
  console.log(data, 'check daata');
  const router = useRouter();
  const [qty, set_qty] = useState(1);
  const [add, set_add] = useState(null);
  const [s_size, set_s_size] = useState(null);
  const [isAdded, setAdded] = useState(false);
  const [ether_modal, set_ether_modal] = useState(false);

  useEffect(() => {
    const initMetaMask = async () => {
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        // let provider = new window.ethereum.providers.Web3Provider(ethereum);
        console.log(address, 'oooooooooooooooooooooo');
        set_add(address[0]);
      } catch (error) {
        console.log(error, 's');
      }
    };
    // initMetaMask();
  }, []);

  const doPayment = async () => {
    console.log(window.ethereum.request);
    const paymentAddress = '0x7e9C5a640133e9ADDFa7FE1cB9eF0eFb7c3CAaAa';
    const amountEth = 1;
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: add,
            to: paymentAddress,
            value: '0x29a2241af62c0000',
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          },
        ],
      })
      .then(txHash => console.log(txHash, 'hash'))
      .catch(error => console.log(error, 'err'));
  };

  const doAddToCart = item => {
    if (data?.sizes.length) {
      if (!s_size) {
        alert('Select Size Please');
        return;
      }
    }
    let itemCopy = { ...item };
    itemCopy.quantity = qty;
    itemCopy.selected = s_size;
    console.log(itemCopy);
    let cartItem = JSON.parse(localStorage.getItem('cart_items'));
    if (cartItem) {
      console.log(cartItem);
      console.log(cartItem.findIndex(item => item._id === itemCopy._id));
      let itemIndex = cartItem.findIndex(item => item._id === itemCopy._id);
      if (itemIndex === -1) {
        let cartItems = [...cartItem, { ...itemCopy }];
        localStorage.setItem('cart_items', JSON.stringify(cartItems));
      } else {
        let cartItemCopy = [...cartItem];
        cartItemCopy[itemIndex].quantity =
          cartItemCopy[itemIndex].quantity + qty;
        cartItemCopy[itemIndex].selected = s_size;
        localStorage.setItem('cart_items', JSON.stringify(cartItemCopy));
      }
    } else {
      let cartItems = [{ ...itemCopy }];
      localStorage.setItem('cart_items', JSON.stringify(cartItems));
    }
    set_qty(1);
    set_s_size(null);
    setAdded(true);
    // alert('Item has been added')
  };
  const doOpenInWindow = ipfs_link => {
    var myWindow = window.open(
      `https://gateway.pinata.cloud/ipfs/${ipfs_link}`
    );
  };
  const doOpenInWindowMeta = ipfs_meta => {
    var myWindow = window.open(
      `https://gateway.pinata.cloud/ipfs/${ipfs_meta}`,
      '',
      'width=500,height=400'
    );
  };

  if (isAdded) {
    return (
      <div className={styles.prod_des_container}>
        <div className={styles.prod_des_container_success}>
          <img src='/Assets/roundtick.png' />
          <h1>Added Successfully!</h1>
          <div className={styles.btns_container}>
            <button
              onClick={() => router.push('/checkout/info')}
              className='btn btn-dark'
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => router.push('/')}
              className='btn btn-primary'
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.prod_des_container}>
        <div className={styles.title_container}>
          <h1>{data?.name}</h1>
          {/* <img
            onClick={() => router.push('/checkout/info')}
            src='/Assets/cart_colo.png'
          /> */}
        </div>
        <div className={styles.stock_container}>
          <p>
            {qty} out of <span>{data?.stock}</span> remaining
          </p>
        </div>
        <div className={styles.des_container}>
          <p>{data?.description}</p>
        </div>
        <div className={styles.price_container}>
          <h3>
            ${data?.price}
            {/* <small>USD</small> */}
          </h3>
        </div>

        <div className={styles.sizes_container}>
          {data.sizes && data.sizes.length
            ? data.sizes.map(size => {
                return (
                  <span
                    className={s_size === size ? styles.selected : ''}
                    onClick={() => set_s_size(size)}
                  >
                    {size}
                  </span>
                );
              })
            : ''}
        </div>
        <div className={styles.add_cart_container}>
          <div className={styles.quantity_container}>
            <button onClick={() => (qty === 1 ? set_qty(1) : set_qty(qty - 1))}>
              -
            </button>
            <input value={qty} />
            <button onClick={() => set_qty(qty + 1)}>+</button>
          </div>
          <button onClick={() => doAddToCart(data)} className='btn btn-dark'>
            Add to Cart
          </button>
        </div>
        <div className={styles.views_btn_container}>
          {/* <div onClick={()=>set_ether_modal(true)}  className={styles.view_item}>
            <img src='/Assets/eth.png' />
            <p>View on Etherscan</p>
            <img src='/Assets/send.png' />
          </div>
          <div
            onClick={() => doOpenInWindow(data.ipfs_link)}
            className={styles.view_item}
          >
            <img src='/Assets/ipfs.png' />
            <p>View on IPFS</p>
            <img src='/Assets/send.png' />
          </div>
          <div 
          onClick={()=>doOpenInWindowMeta(data.meta_data_hash)}
          className={styles.view_item}>
            <img src='/Assets/ipfs_md.png' />
            <p>View IPFS Metadata</p>
            <img src='/Assets/send.png' />
          </div> */}
        </div>
        <Modal
          toggle={() => set_ether_modal(false)}
          centered
          isOpen={ether_modal}
        >
          <div className='custom-basic-modal'>
            <h2 className='p-4'>NFT is Minted after Purchase </h2>
          </div>
        </Modal>
      </div>
    );
  }
};

export default ProdDescription;