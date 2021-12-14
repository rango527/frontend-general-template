import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './p-p-header.module.scss';

const PublicProfileHeader = () => {
  return (
    <div className={styles.pub_prof_header_container}>
      <Row>
        <Col sm={12} md={6}>
          <section className={styles.content_left_container}>
            <div className={styles.content_sec}>
              <h1>@CalebMarshall</h1>
              <p>
                The One of One Drop with FG Duddy for an all once in a life time
                chance with a live fly out where the lucky winner can fly out
                and meet with FGTeev Duddy to come spend the day and hang out
                with an one on one experience that’s never been possible before!
              </p>
              <div className={styles.btns_container}>
                <button className='btn btn-dark'>Get Started</button>
                <button className='btn'>View Collection</button>
              </div>
            </div>
          </section>
        </Col>
        <Col sm={12} md={6}>
          <section className={styles.right_image_container}>
            <img src='/Assets/marshal-header.png' />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default PublicProfileHeader;
