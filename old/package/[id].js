import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import BiddingSection from '../../components/LandingTwo/BiddingSections/BiddingSection';
import PkgProduct from '../../components/PkgProduct/PkgProduct';
import ProdCarousal from '../../components/ProdCarousal/ProdCarousal';
import ProdDescription from '../../components/ProdDescription/ProdDescription';
import Footer from '../../components/Footer/Footer';
import { tray } from '../../utils/prod.data';
import { dolly_data } from '../../utils/pro-header.data';
import { bottom_data_dolly } from '../../utils/bottom.data';
import styles from '../../styles/pkg.module.scss';
import axios from 'axios';

const btn_light = {
  backgroundColor: '#ffffff',
  color: '#ef5da8',
  border: '1px solid #ffffff',
};

const btn_primary = {
  backgroundColor: '#ef5da8',
  color: '#ffffff',
  border: '1px solid #ef5da8',
};

const Package = () => {
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);
  const [package_data, set_package_data] = useState(null);

  const fetchPkg = async () => {
    try {
      set_loading(true);
      let response = await axios.get(
        'https://soprano-backend.herokuapp.com/subscriber/shopping/packages',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMGM0ZWZhY2ViMjE1MDAyZWQxZjE0YiJ9LCJpYXQiOjE2MjgxOTY2MDJ9.3NBt3TJ2u3XrYLXn3D6Ber-KiHJ-LDteMgW9c9D2JSw',
          },
        }
      );
      console.log(response.data, 'final pkg');
      set_package_data(response.data.length ? response.data[0] : []);
      set_loading(false);
    } catch (e) {
      set_loading(false);
      set_server_err('Some Server Error');
    }
  };
  useEffect(() => {
    fetchPkg();
  }, []);
  return (
    <Container fluid className='p-0'>
      <div className={styles.pkg_container}>
        <span className='d-none d-md-block'>
          <Navbar btn_primary={btn_primary} btn_light={btn_light} />
        </span>
        <Row>
          <Col sm={12} md={7}>
            <ProdCarousal
              data={{
                uploads: [{ url: '/Assets/h3.png' }],
              }}
            />
          </Col>
          <Col sm={12} md={5}>
            <ProdDescription
              data={{
                name: 'PewDiePie NFT',
                description:
                  'The One of One Drop with PEWDIEPIE for an all once in a life time chance to collect an NFT that’s never been possible before! With a special drop with merch, NFT’s, and unlockable content! ',
                stock: 2,
                price: 3500,
              }}
            />
          </Col>
        </Row>
        <section className={styles.pkg_products_container}>
          <h1>What Comes with Your NFT</h1>
          {Array(5)
            .fill()
            .map(item => {
              return <PkgProduct />;
            })}
        </section>
        {/* {package_data?.products.length
          ? package_data?.products.map(item => {
              return <BiddingSection data={item} />;
            })
          : ''} */}
        <Footer />
      </div>
    </Container>
  );
};

export default Package;
