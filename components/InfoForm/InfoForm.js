import React from 'react';
import {useRouter} from  "next/router";
import { Col, Row } from 'reactstrap';
import styles from './infoform.module.scss';
const InfoForm = () => {
  const router = useRouter()
  return (
    <div className={styles.info_form_container}>
      <h3>CONTACT INFORMATION</h3>
      <div className={styles.imfo_form}>
        <div className={styles.input_container}>
          <label>Email</label>
          <input name='email' type='email' placeholder='Email' />
        </div>
        <Row>
          <Col sm={12} md={6}>
            <div className={styles.input_container}>
              <label>First Name</label>
              <input name='f_name' type='text' placeholder='First Name' />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.input_container}>
              <label>Last Name</label>
              <input name='l_name' type='text' placeholder='Last Name' />
            </div>
          </Col>
        </Row>
        <div className={styles.input_container}>
          <label> Shipping Address</label>
          <input name='address' type='text' placeholder='Address' />
        </div>
        <Row>
          <Col sm={12} md={4}>
            <div className={styles.input_container}>
              <label> Country</label>
              <input name='country' type='text' placeholder='Country' />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={styles.input_container}>
              <label> State</label>
              <input name='state' type='text' placeholder='State' />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={styles.input_container}>
              <label> City</label>
              <input name='city' type='text' placeholder='City' />
            </div>
          </Col>
        </Row>
        <div className={styles.input_container}>
          <label> Phone#</label>
          <input name='phone' type='text' placeholder='Phone' />
        </div>
        <div className={styles.btn_container} >
            <button onClick={()=>router.push("/checkout/payment")} className="btn btn-dark" >Go To Payment</button>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
