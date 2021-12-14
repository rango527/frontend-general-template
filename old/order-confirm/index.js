import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import styles from './order-confirm.module.scss';
// import axios from 'axios';
// import { URL } from '../../utils/server-url/URL';

const OrderConfirm = () => {
  const router = useRouter();

  return (
    <div className={styles.order_confirm_container}>
      <span className='d-none d-md-block'>
          <Navbar  />
      </span>
      <div className={styles.flex_container} >
      <h1>Order Confirmed!</h1>
      <div className={styles.order_confirm_content}>
        <section className={styles.conetnt_insider}>
          <div className={styles.title_container}>
            <h6>
              <img src='/Assets/new_logo_new.png' />
              Congratulations!
            </h6>
          </div>
          <div className={styles.img_container}>
            <img src='/Assets/blue_check.png' />
          </div>
          <p>
          Congratulations! You made the payment succesfully! We will send you an email about the payment.
          </p>
          <div className={styles.btn_container} >
            <button onClick={()=>router.push("/profile")} className='btn btn-dark' >Go To Your Order</button>
          </div>
        </section>
      </div>
      <div className={styles.btn_next} >
      <button onClick={()=>router.push("/profile")} className="btn btn-dark" >Next</button>
      </div>
      </div>

    </div>
  );
};

export default OrderConfirm;
