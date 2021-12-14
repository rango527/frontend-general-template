import React, { useState, useEffect } from 'react';
import styles from './c-list.module.scss';
import axios from 'axios';

const CryptoList = () => {
  const [isLoading, setLoading] = useState(false);
  const [serverErr, setServerErr] = useState(null);
  const [cryptoData, setCryptoData] = useState(null);

  const fetchCrypto = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        'https://secret-woodland-55757.herokuapp.com/get/all/cryptos'
      );
      console.log(response?.data?.data?.data, '..........crypto........');
      setCryptoData(response?.data?.data?.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setServerErr(JSON.stringify(e));
    }
  };
  useEffect(() => {
    fetchCrypto();
  }, []);

  return (
    <div className={styles.cryptos_container}>
      {isLoading ? <p>Loading....</p> : ''}
      <div className={styles.cryptos_content}>
        {cryptoData &&
          cryptoData.map(item => {
            return (
              <div className={styles.crypto_item}>
                <div className={styles.right_container}>
                  <p>{item.symbol}</p>
                  <small>{item.slug}</small>
                </div>
                <p>64</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CryptoList;
