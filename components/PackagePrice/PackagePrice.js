import React from 'react';
import styles from './pkg-price.module.scss';

const PackagePrice = ({ btn_light, data }) => {
  return (
    <div className={styles.pkg_price_container}>
      <div className={styles.pkg_price_content}>
        <h3>Price</h3>
        <p>{data?.stock} Pcs</p>
        <h1>$ {data?.price}</h1>
        <button style={{ ...btn_light }} className='btn'>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PackagePrice;
