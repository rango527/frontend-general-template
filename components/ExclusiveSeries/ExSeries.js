import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Modal } from 'reactstrap';
import styles from './ex-series.module.scss';

import { signMessage } from '../../utils/firebase-utils/eth';
import {
  createLink,
  loginWithNFT,
} from '../../utils/firebase-utils/cloudFunctions';
import setAuthToken from '../../utils/setAuth/setAuth';
import { URL, OWNER_ID } from '../../utils/config/server-config';
import axios from 'axios';

const ExSeries = () => {
  const router = useRouter();
  const [errorModal, setErrorModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(
    '0x3a935b0A043d1FbdFDFD2FbD971A2A2130299e84'
  );
  const [owner_id, set_owner_id] = useState('6160ce61a7d984002f8c8001');
  const [error, setError] = useState('');
  const [is_loading, set_loading] = useState(false);
  const [all_videos, set_all_videos] = useState(false);

  const fetchVideos = async () => {
    set_loading(true);
    try {
      let response = await axios.get(
        `${URL}/subscriber/landing/videos?creator=${OWNER_ID}`
      );
      console.log(response.data, 'finalllllllllll video');
      set_all_videos(response.data);
      set_loading(false);
    } catch (e) {
      set_loading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleLogin = async (id) => {
    setError('');
    const body = `I am proving that I own an NFT on ${new Date().toISOString()}`;
    const { signature, account } = await signMessage({ body });
    // console.log(account, '...................sig');
    try {
      let data = {
        wallet_address: account,
        contract_addresses: [selectedContract],
        owner: owner_id,
      };
      console.log(account , "final.......................")
      const response = await loginWithNFT(data);
      setAuthToken(response.token);
      localStorage.setItem('isSubscribe', response?.subscriber?.is_subscribed);
      localStorage.setItem('token', response?.token);
      localStorage.setItem('user', JSON.stringify(response?.subscriber));
      router.push(`/video/${id}`);
      console.log(response, 'result....................');
    } catch (error) {
      console.log('error', error);
      // Getting the Error details.
      // const code = error.code
      const message = error?.message;
      // const details = error.details
      setError(message);
      setErrorModal(true);
    }
  };
  return (
    <div className={styles.ex_series_container}>
      <h1>The Alpha Betas Exclusive Access Series </h1>
      <section className={styles.series_body}>
        <Row>
          {all_videos &&
            all_videos.map(item => {
              return (
                <Col sm={12} md={4}>
                  <div className={styles.series_item}>
                    <img src={item?.thumbnail} />
                    <button
                      onClick={() => handleLogin(item?._id)}
                      className='btn'
                    >
                      {item?.name}
                      <img src='/Assets/alpha_new/three_arrow.svg' />
                    </button>
                  </div>
                </Col>
              );
            })}
        </Row>
      </section>
      <Modal centered isOpen={errorModal} toggle={() => setErrorModal(false)}>
        <section className='p-4'>
          <h4 className='text-danger text-center'>{error}</h4>
        </section>
      </Modal>
    </div>
  );
};

export default ExSeries;
