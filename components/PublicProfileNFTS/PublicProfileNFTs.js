import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import styles from './p-p-nft.module.scss';
const PublicProfileNFTs = () => {
  const [current_opt, set_current_opt] = useState('');
  return (
    <div className={styles.public_nft_container}>
      <div className={styles.nft_opt_container}>
        <p
          onClick={() => set_current_opt('Created')}
          className={current_opt === 'Created' ? styles.selected : ''}
        >
          Created
        </p>
        <p
          onClick={() => set_current_opt('Collected')}
          className={current_opt === 'Collected' ? styles.selected : ''}
        >
          Collected
        </p>
        <p
          onClick={() => set_current_opt('Cryptos')}
          className={current_opt === 'Cryptos' ? styles.selected : ''}
        >
          Cryptos
        </p>
      </div>
      <div className={styles.nft_collection_container}>
        <Row>
          {Array(10)
            .fill()
            .map(item => {
              return (
                <Col sm={12} md={4}>
                  <div className={styles.p_card_container}>
                    <div
                      //   onClick={() =>
                      //     item.stock === 0
                      //       ? null
                      //       : router.push('/product/' + item._id)
                      //   }
                      className={styles.img_container}
                    >
                      {/* {item?.thumbnail?.type === 'video' ? (
                        <video
                          autoPlay
                          playsInline
                          muted
                          src={item?.thumbnail?.url}
                        />
                      ) : (
                        <img
                          width='100%'
                          src={item?.thumbnail?.url}
                          alt='Card image cap'
                        />
                      )} */}
                      <img src='/Assets/p-1.png' />
                    </div>
                    <div className={styles.card_body}>
                      <h1>Mirror</h1>
                      {/* <p>{item?.stock} Minted</p> */}
                      {/* {item.stock === 0 ? (
                        <div className={styles.sold_out_container}>
                          <span class='badge bg-danger'>Sold Out</span>
                        </div>
                      ) : (
                        ''
                      )} */}
                      <button
                        // onClick={() =>
                        //   item.stock === 0
                        //     ? null
                        //     : router.push('/product/' + item._id)
                        // }
                        className='btn btn-dark btn-block'
                      >
                        Viev Item
                      </button>
                    </div>
                    <div className={styles.card_footer}>
                      <section className={styles.price_sec}>
                        <p>
                          {' '}
                          <span></span> Price
                        </p>
                        <h6>$369</h6>
                      </section>
                      <section className={styles.is_auc_sec}>
                        <p>Ending in</p>
                        <h6>
                          {' '}
                          <img src='/Assets/fire.svg' />{' '}
                          {/* {item.in_auction ? '' : 'Open Edition'} */}
                          Open Edition
                        </h6>
                      </section>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default PublicProfileNFTs;
