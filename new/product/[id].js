import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import ProdCarousal from '../../components/ProdCarousal/ProdCarousal';
import ProdDescription from '../../components/ProdDescription/ProdDescription';
import Footer from '../../components/Footer/Footer';
import { URL, OWNER_ID } from '../../utils/config/server-config';
import axios from 'axios';
import styles from './prod.module.scss';
const Product = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);
  const [prod_data, set_prod_data] = useState(null);

  const fetchProd = async () => {
    let token = localStorage.token;
    if (token) {
      set_loading(true);
      try {
        let response = await axios.get(`${URL}/subscriber/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        set_loading(false);
        set_prod_data(response.data);
      } catch (e) {
        set_loading(false);
        set_server_err(JSON.stringify(e));
        console.log(e);
      }
    } else {
      router.push('/');
    }
  };
  useEffect(() => {
    console.log(id, 'iiiiiiiiiiiiiiiiiiidddddddddddd');
    fetchProd();
  }, [id]);
  return (
    <div className={styles.prod_container}>
      <span className='d-none d-md-block'>
        <Navbar />
      </span>
      <Row>
        <Col sm={12} md={7}>
          {is_loading ? <p>Loading..........</p>:""}
          {prod_data && <ProdCarousal data={prod_data} />}
        </Col>
        <Col sm={12} md={5}>
          {prod_data && <ProdDescription data={prod_data} />}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Product;
