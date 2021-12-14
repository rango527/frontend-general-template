import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './s-header.module.scss';
const SeriesHeader = () => {
  return (
    <div className={styles.header_container}>
      <section className={styles.sec_top}>
        <Row className='flex-column-reverse flex-md-row'>
          <Col sm={12} md={6}>
            <div className={styles.headre_left_content}>
              <div className={styles.content_sec}>
                <h1>Alpha Betas</h1>
                <p>
                In Alpha Betas, video games are powering the world thanks to a massive, top-secret CIA program. The show follows an elite virtual strike force of four top gamers as they drop into the virtual realms of video games to fix potentially world-ending issues. Known as the Alpha Team, these four willfully reckless and dangerously arrogant guys are the tip of a five-hundred billion dollar US Government spear sent to be heroes in high-octane pixelated worlds.
                </p>
                <div className={styles.btns_container}>
                <button className="btn" >View Collection</button>
                <button className="btn" >Discord</button>
              </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.right_image}>
              <img alt='' src={"/Assets/alpha_header.png"} />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SeriesHeader;
