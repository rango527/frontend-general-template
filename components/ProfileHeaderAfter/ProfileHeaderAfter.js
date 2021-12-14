import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './p-header-after.module.scss';
const ProfileHeaderAfter = ({btn_light}) => {
  return (
    <div className={styles.header_after_container}>
      <div className={styles.sec_content_container}>
        <Row>
          <Col sm={12} md={6}>
              <div className={styles.header_after_content_sec} >
                  <h1>My Highlighted NFT</h1>
                  <p>The One of One Drop with Caleb Marshall for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with Caleb to come spend the day and hang out with an one on one experience that’s never been possible before!</p>
                  <div className={styles.btn_container} >
                      <button style={{...btn_light}} className="btn" >View Item</button>
                  </div>
              </div>
          </Col>
          <Col sm={12} md={6}>
              <div className={styles.header_after_img_sec} >
                  <img src="/Assets/pheaderAfter.png" />
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfileHeaderAfter;
