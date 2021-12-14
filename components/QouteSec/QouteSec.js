import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './qoute-sec.module.scss';
const QouteSec = ({data}) => {
  return (
    <div className={styles.qoute_sec}>
      <div className={styles.black_sec} >
      </div>
      <div className={styles.img_sec}>
        <img src={data.image} />
      </div>
      <div className={styles.qoute_content}>
        <img src="/Assets/quote.png" />
        <h3>{data.title}</h3>
        <p>
          {data.description}
        </p>
        <small>{data.name}</small>
        <small>{data.designation}</small>
      </div>
    </div>
  );
};

export default QouteSec;
