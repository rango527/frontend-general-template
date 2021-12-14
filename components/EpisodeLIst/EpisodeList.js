import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Col, Row, Card, CardBody, Badge, Modal } from 'reactstrap';
import styles from './ep-list.module.scss';
import { URL, OWNER_ID } from '../../utils/config/server-config';
import axios from 'axios';
import { prods } from './data';
import { signMessage } from '../../utils/firebase-utils/eth';
import { createLink } from '../../utils/firebase-utils/cloudFunctions';

const EpisodeList = () => {
  const router = useRouter();

  const [errorModal, setErrorModal] = useState(false);
  // UNLOCKABLES
  // 0x9508008227b6b3391959334604677d60169EF540
  const [selectedContract, setSelectedContract] = useState(
    "0xCdC57B16c5ea4E460463faF953d7743eb544B9F7"
  );
  const [selectedUrl, setSelectedUrl] = useState(
    'https://www.youtube.com/watch?v=_PUt6q8KRsE&t=382s'
  );

  const [error, setError] = useState('');
  const [link, setLink] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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

  const handleCreateLink = async () => {
    
    setError('');
    setLink('');

    if (!selectedContract || !selectedUrl) {
      return;
    }

    const body = `I am proving that I own an NFT on ${new Date().toISOString()}`;
    const sig = await signMessage({ body });
    console.log(sig, '...................sig');
    try {
      const { error, result } = await createLink({
        sig,
        msg: body,
        contractAddressArray: [selectedContract],
        linkDestination: selectedUrl,
      });
      console.log(result, 'finallllllllll link');
      // console.log(error, 'finallllllllll error');
      if (result?.error) {
        setError(result?.error);
        setErrorModal(true);
        return;
      }
      //or just
      window
        .open('https://www.youtube.com/watch?v=_PUt6q8KRsE&t=382s', '_blank')
        .focus();
    } catch (error) {
      console.log('error', error);
      // Getting the Error details.
      // const code = error.code
      const message = error.message;
      // const details = error.details
      setError(message);
      setErrorModal(true);
    }
  };

  return (
    <div className={styles.prod_tray_container}>
      <section className={styles.tray_header}>
        <h1>Meet The Cast Behind Alpha Betas </h1>
        <p>Learn More About The Show on the about page </p>
      </section>
      <div className={styles.tray_items_container}>
        <Row>
          {all_nfts &&
            all_nfts.map((item, i) => {
              return (
                <Col key={i} sm={12} md={4}>
                  <div className={styles.p_card_container}>
                    <div
                      onClick={handleCreateLink}
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
      <Modal centered isOpen={errorModal} toggle={() => setErrorModal(false)}>
        <section className="p-4" >
          <h4 className='text-danger text-center'>{error}</h4>
        </section>
      </Modal>
    </div>
  );
};

export default EpisodeList;
