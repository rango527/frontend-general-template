import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import { OWNER_ID, URL } from '../../utils/config/server-config';
import axios from 'axios';
import styles from './ex-prod.module.scss';
const ExclusiveProducts = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [serverErr, setServerErr] = useState(null);
  const [all_prods, set_all_prods] = useState(null);

  const fetchData = async id => {
    let token = localStorage.token;
    if (token) {
      setLoading(true);
      try {
        let response = await axios.get(
          `${URL}/subscriber/products/by-category?owner=${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        if (response?.data?.data.length) {
          set_all_prods(response?.data?.data[0]?.gist);
        }
        console.log(response.data, 'nft===============s');
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    fetchData(OWNER_ID);
  }, []);

  return (
    <div className={styles.ex_prods_container}>
      <section className={styles.ex_prods_header}>
        <h1>
          Exclusive <span>ALPHA BETAS MERCH</span>
        </h1>
        <p> For NFT Holders Only</p>
      </section>
      <section className={styles.ex_prods_body}>
        <Row>
          {all_prods &&
            all_prods.map(item => {
              return (
                <Col sm={12} md={6}>
                  <div className={styles.ex_prods_item}>
                    <img src={item?.thumbnail?.url} />
                    <div
                      style={{cursor:"pointer"}}
                      onClick={() => router.push(`/product/${item?._id}`)}
                      className={styles.content_sec}
                    >
                      <p>${item?.price}</p>
                      <p>
                        View <img src='/Assets/alpha_new/three_arrow.svg' />
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </section>
    </div>
  );
};

export default ExclusiveProducts;
