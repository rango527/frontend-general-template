import React from 'react';
import styles from './o-detail.module.scss';
const OrderDetail = () => {
  return (
    <div className={styles.order_detail_container}>
      <div className={styles.order_detail_content}>
        <div className={styles.header_sec}>
          <h2>Order Details</h2>
          <hr />
        </div>
        <div className={styles.item_heading}>
          <p>Item</p>
          <p>Subtotal</p>
        </div>
        <div className={styles.item_des}>
          <p>The FGTEEV NFT 1</p>
          <p>$3500</p>
        </div>
        
        <hr />
        <div className={styles.amount_container}>
          <div></div>
          <div className={styles.am_sec}>
            <p>
              Total: <b>$7000</b>
            </p>
            <p> 2 out of 12 Minted</p>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className='btn btn-dark btn-block'>Almost Done</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
