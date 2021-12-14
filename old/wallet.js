import React, { useState, useEffect } from 'react';
import sha256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const Wallet = () => {
  const [mnemonic, set_mnemonic] = useState('');
  const [xpub, set_xpub] = useState('');
  const [w_address, set_w_address] = useState('');
  const [priv_key, set_priv_key] = useState('');
  const [user_account, set_user_account] = useState(null);

  useEffect(() => {
    console.log(
      String(CryptoJS.MD5('hello world')) ===
        String(CryptoJS.MD5('hello world')),
      'ok'
    ); //HASH
    console.log(sha256('Hello World'));
    console.log(
      CryptoJS.AES.encrypt(JSON.stringify('hello world'), 'hamza').toString()
    );
    console.log(
      CryptoJS.AES.decrypt(
        'U2FsdGVkX194NIkexQ74UVNTw0SUdkuCcBIYR5msyFU=',
        'hamza'
      ).toString(CryptoJS.enc.Utf8)
    );
  }, []);
  const generateWallet = async () => {
    try {
      let response = await axios.get(
        'https://api-eu1.tatum.io/v3/ethereum/wallet',
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
          },
        }
      );
      let accountResponse = await axios.post(
        `https://api-eu1.tatum.io/v3/ledger/account`,
        {
          currency: 'ETH',
          xpub: response.data.xpub,
          accountingCurrency: 'USD',
          customer: { externalId: 'samuel.sramko@tatum.io' },
        },
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
            'content-type': 'application/json',
          },
        }
      );

      let walletResponse = await axios.get(
        `https://api-eu1.tatum.io/v3/ethereum/address/${response.data.xpub}/1`,
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
          },
        }
      );
      let privResponse = await axios.post(
        `https://api-eu1.tatum.io/v3/ethereum/wallet/priv`,
        {
          index: 1,
          mnemonic: response.data.mnemonic,
        },
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
            'content-type': 'application/json',
          },
        }
      );
      console.log(accountResponse, 'saaaaaaaaaasssssssss');
      console.log(privResponse, 'finalllllllllll');
      console.log(walletResponse, 'resssssssssssssssssssssss');
      console.log(response, 'responseeeeeeeeee');
      set_mnemonic( String(CryptoJS.MD5(response.data.mnemonic)));
      set_xpub(response.data.xpub);
      set_w_address(walletResponse.data.address);
      set_priv_key(CryptoJS.AES.encrypt(JSON.stringify(privResponse.data.key), 'hamza').toString());
      set_user_account(accountResponse.data);
    } catch (e) {
      console.log(e, 'errrrrr');
    }
  };
  return (
    <div>
      <button onClick={generateWallet}>Generate Wallet</button>
      <p>Mnemonic = {mnemonic}</p>
      <p>Extented Public Key = {xpub}</p>
      <p>Wallet Address = {w_address}</p>
      <p>Private Key = {priv_key}</p>
    </div>
  );
};

export default Wallet;
