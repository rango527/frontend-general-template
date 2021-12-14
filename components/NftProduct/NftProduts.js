import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Col, Row, Card, CardBody, Badge } from 'reactstrap';
import styles from './nft-prod.module.scss';
import { URL, OWNER_ID } from '../../utils/config/server-config';
import axios from 'axios';
import { prods } from './data';
const NftProduts = () => {
  const router = useRouter();
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);
  const [all_nfts, set_all_nfts] = useState(null);

  const fetchAllnfts = async () => {
    set_loading(true);
    try {
      // let response = await axios.get(URL + '/metadata');
      // console.log(response.data, 'NFT.....................');
      // set_all_nfts(response.data);
      set_loading(false);
      set_all_nfts(prods);
    } catch (e) {
      set_loading(false);
      set_server_err(JSON.stringify(e));
    }
  };
  useEffect(() => {
    fetchAllnfts();
  }, []);
  return (
    <div className={styles.prod_tray_container}>
      <section className={styles.tray_header}>
        <h1>Meet The Cast Behind Alpha Betas </h1>
        <p>Learn More About The Show on the about page </p>
      </section>
      <div className={styles.tray_items_container}>
        <Row>
          {all_nfts &&
            all_nfts.map(item => {
              return (
                <Col sm={12} md={4}>
                  <div className={styles.p_card_container}>
                     <div
                      onClick={() =>
                        router.push('/product/613fd883c23988002f53f0e6')
                      }
                      // onClick={()=>router.push('/product/' + item._id)}
                      // onClick={() =>
                      //   item.stock === 0
                      //     ? null
                      //     : router.push('/product/' + item._id)
                      // }
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
                      <img
                        width='100%'
                        src={item?.image}
                        alt='Card image cap'
                      />
                    </div>
                    <div className={styles.card_body}>
                      <h1>{item.name}</h1>
                      {/* {item.stock === 0 ? (
                      <div className={styles.sold_out_container}>
                        <span class='badge bg-danger'>Sold Out</span>
                      </div>
                    ) : (
                      ''
                    )} */}
                      <button
                        style={{ height: '40px' }}
                        //   onClick={() =>
                        //     item.stock === 0
                        //       ? null
                        //       : router.push('/product/' + item._id)
                        //   }
                        onClick={() =>
                          router.push('/product/613fd883c23988002f53f0e6')
                        }
                        className='btn btn-dark btn-block'
                      ></button>
                    </div>
                    <div className={styles.card_footer}>
                      {/* <section className={styles.price_sec}>
                      <p>
                        {' '}
                        <span></span> Price
                      </p>
                      <h6>${item.price}</h6>
                    </section> */}
                      <section className={styles.is_auc_sec}>
                        {/* <p>Ending in</p>
                      <h6>
                        {' '}
                        <img src='/Assets/fire.svg' />{' '}
                        {item.in_auction ? '' : 'Open Edition'}
                      </h6> */}
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

export default NftProduts;
