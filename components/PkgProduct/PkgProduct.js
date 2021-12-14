import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './p-p.module.scss';
const PkgProduct = () => {
  return (
    <div className={styles.pkg_p_container}>
      <Row>
        <Col sm={12} md={7}>
          <section className={styles.img_sec}>
            <img src='/Assets/p-p.png' />
          </section>
        </Col>
        <Col sm={12} md={5}>
          <section className={styles.content_sec}>
            <div className={styles.content_container}>
              <div className={styles.content_top}>
                <h1>PewDiePie NFT</h1>
                <p>
                  The One of One Drop with PEWDIEPIE for an all once in a life
                  time chance to collect an NFT that’s never been possible
                  before! With a special drop with merch, NFT’s, and unlockable
                  content!
                </p>
              </div>
              <div className={styles.content_bottom}>
                <small>Included with 1 of 1 Bundle</small>
                <button className={'btn btn-light'}>$3500</button>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default PkgProduct;
