import React, { useMemo, useState, useEffect } from 'react';
import Web3 from "web3";
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import styles from './p-form.module.scss';
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import { URL, OWNER_ID } from '../../utils/config/server-config';
import axios from 'axios';

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    []
  );
  return options;
};

const PaymentForm = () => {
  const [method_type, set_method_type] = useState('');
  const [session, loading] = useSession();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [isLoading, setLoading] = useState(false);
  const [serverErr, setServerErr] = useState(null);
  const [add, set_add] = useState(null);
  const [zip, set_zip] = useState('');
 
  const handleSubmit = async event => {
    event.preventDefault();

    let ship_info = JSON.parse(localStorage.getItem('cart_items'));
    let cart_data = ship_info.map(item => {
      let newData = {
        product_id: item._id,
        quantity: item.quantity,
        sizes: [item.selected],
      };
      return newData;
    });
    console.log(cart_data, 'check karo');
    let data = {
      items: cart_data,
    };
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);
    try {
      let secret_response = await axios.post(
        URL + '/subscriber/shopping/checkout/create/from-client-cart',
        data,
        {
          headers: {
            Authorization: `Bearer ${session?.user?.email}`,
          },
        }
      );
      console.log(secret_response, '===============ers');

      const result = await stripe.confirmCardPayment(
        secret_response.data.client_secret,
        {
          payment_method: {
            
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'Hamza Khan',
            },
          },
        }
      );

      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message, 'errorr--------------------');

        setServerErr(result?.error?.message);
        setLoading(false);
      } else {
        console.log(result, '=================result=========');
        console.log(secret_response.data.order_id);
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          //do tatum
          // let txResponse = await axios.post(
          //   `https://api-eu1.tatum.io/v3/ethereum/erc721/deploy`,
          //   {
          //     name:"MY NFT",
          //     symbol:"ERC_SYMBOL",
          //     fromPrivateKey:"30870ca1fe953cf186cd4a622e98b5801cca9625406467aa074d6f0662592449",
          //     nonce:0,
          //     fee:{
          //       gasLimit: "40000",
          //       gasPrice: "20"
          //     }
          //   },
          //   {
          //     headers: {
          //       'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
          //       'content-type': 'application/json',
          //     },
          //   }
          // );
          // console.log(txResponse , "check Tx Id")
          let final_response = await axios.post(
            `${URL}/subscriber/shopping/checkout/${secret_response.data.order_id}/complete`,
            {},
            {
              headers: {
                Authorization: `Bearer ${session?.user?.email}`,
              },
            }
          );
          setLoading(false);
          localStorage.removeItem('cart_items');
          router.push('/order-confirm/');
        }
      }
    } catch (e) {
      // router.push('/order-confirm/');
      console.log(e,"dekho")
      setLoading(false);
      if (e?.response?.data) {
        setServerErr(e.response.data?.error);
      } else {
        setServerErr('some server error');
      }
    }
  };

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
    initMetaMask();
    // console.log(session, 'useeffetc-----------');
  }, []);

  const doPayWithMetaMask = async () => {
    console.log(window.ethereum.request);
    const paymentAddress = '0x98B8c1E388f70574D8F6E1E81C2387c5cB7f2676';
    const amountEth = '0.000001';
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: add,
            to: paymentAddress,
            value: Web3.utils.toWei(amountEth, 'ether'),
            // gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
            // gas: '21000',
          },
        ],
      })
      .then(txHash => console.log(txHash, 'hash'))
      .catch(error => console.log(error, 'err'));
  };

  if (method_type === 'stripe') {
    return (
      <div className={styles.payment_form_container_mega}>
        <div className={styles.payment_form_container}>
          <h2>Payment</h2>
          <div className={styles.card_detail_container}>
            <label style={{ color: 'white' }}>
              <span>Card details</span>
              <CardElement
              options={options}
              // onReady={() => {
              //   console.log('CardElement [ready]');
              // }}
              // onChange={event => {
              //   console.log('CardElement [change]', event);
              // }}
              // onBlur={() => {
              //   console.log('CardElement [blur]');
              // }}
              // onFocus={() => {
              //   console.log('CardElement [focus]');
              // }}
            />
            </label>
            {/* <label>Card Number</label>
            <CardNumberElement options={options} />
            <label>Expiry</label>
            <CardExpiryElement options={options} />
            <label>CVC</label>
            <CardCvcElement options={options} /> */}
          </div>
          {/* <div className='mt-3 form-input-container'>
              <label>Zip</label>
              <input
                style={{border:"1px solid black"}}
                value={zip}
                onChange={e => {
                  
                  set_zip(e.target.value);
                }}
                type='text'
                placeholder='Enter ZIP Code'
              />
              <small className='text-danger ms-2'>{client_errors.email}</small>
            </div> */}
          <div className={styles.btn_container}>
            <button
              onClick={handleSubmit}
              className='btn btn-dark'
              disabled={isLoading ? 'disabled' : ''}
            >
              Checkout
            </button>
            {/* <button onClick={testDep} className='btn btn-dark'>
            Pay With Eth
          </button> */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <section className={styles.checkout_select_method}>
        <div className={styles.select_method_container}>
          <div className={styles.title_container}>
            <h2>How would you like to pay?</h2>
          </div>
          <div className={styles.header_container}>
            <h6>
              <img src='/Assets/new_logo_new.png' /> Mintdropz
            </h6>
            <p>
              Mintdropz is a NFT Wallet that allows you to buy, sell, trade, and
              display your NFT’s!
            </p>
          </div>
          <button onClick={() => set_method_type('stripe')} className='btn'>
            <img src='/Assets/debit.png' />
            Credit/Debit Card
          </button>
          <button onClick={()=>doPayWithMetaMask()} className='btn'>
            <img src='/Assets/meta.png' />
            Metamask{' '}
          </button>
          <button className='btn'>
            <img src='/Assets/coinbase.png' />
            WalletConnect{' '}
          </button>
        </div>
      </section>
    );
  }
};
export default PaymentForm;