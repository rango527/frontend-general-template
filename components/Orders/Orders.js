import React, { useState, useEffect } from 'react';
import { Col, Row, Card, CardBody, Badge } from 'reactstrap';
import { useRouter } from 'next/router';
import CryptoList from "../CryptoList/CryptoList";
import styles from './orders.module.scss';

const Orders = ({ orders }) => {
  const router = useRouter();
  const [current_opt, set_current_opt] = useState('');

  return (
    <div className={styles.orders_container}>
      <div className={styles.opts_container}>
        <p
          onClick={() => set_current_opt('created')}
          className={current_opt === 'created' ? styles.selected : ''}
        >
          Created
        </p>
        <p
          onClick={() => set_current_opt('collected')}
          className={current_opt === 'collected' ? styles.selected : ''}
        >
          Collected
        </p>
        <p
          onClick={() => set_current_opt('cryptos')}
          className={current_opt === 'cryptos' ? styles.selected : ''}
        >
          Cryptos
        </p>
        <p
          onClick={() => set_current_opt('merch')}
          className={current_opt === 'merch' ? styles.selected : ''}
        >
          Merch
        </p>
      </div>
      <div className={styles.collected_container}>
        {current_opt === "cryptos" ?(
          <CryptoList/>
        ):""}
        {current_opt === 'collected' ? (
          <Row>
            {orders
              ? orders.map(item => {
                  return (
                    <Col sm={12} md={4}>
                      <div className={styles.p_card_container}>
                        <div className={styles.img_container}>
                          {item?.items[0]?.product.thumbnail.type ===
                          'video' ? (
                            <video
                              autoPlay
                              playsInline
                              muted
                              src={item?.items[0]?.product.thumbnail.url}
                            />
                          ) : (
                            <img
                              width='100%'
                              src={item?.items[0]?.product.thumbnail.url}
                              alt='Card image cap'
                            />
                          )}
                          {/* <img src='/Assets/p-1.png' /> */}
                        </div>
                        <div className={styles.card_body}>
                          <h1>{item?.items[0]?.product.name}</h1>
                          {/* <p>{item?.stock} Minted</p> */}
                          <button className='btn btn-dark btn-block'>
                            Mint
                          </button>
                          <button
                            onClick={() => router.push('/order/' + item._id)}
                            className='btn btn-dark btn-block'
                          >
                            Viev Your NFT
                          </button>
                        </div>
                      </div>
                    </Col>
                  );
                })
              : ''}
          </Row>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Orders;
