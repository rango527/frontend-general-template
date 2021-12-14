import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, getProviders } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Row, Col, Alert } from 'reactstrap';
import { useAuthContext } from '../../context/auth';
import { URL, OWNER_ID } from '../../utils/config/server-config';
import setAuthToken from '../../utils/config/setAuthToken';
import axios from 'axios';
import styles from './c-auth.module.scss';
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

const CheckoutLogin = ({ set_login }) => {
  const router = useRouter();
  let { doSetUser } = useAuthContext();
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);

  const doLogin = async () => {
    if (!email) {
      alert('Email is Required');
      return;
    }
    if (!password) {
      alert('Password is Required');
      return;
    }
    set_loading(true);
    try {
      let final_data = {
        username: email,
        password,
      };

      // let response = await axios.post(URL + '/login', final_data);
      let response = await signIn('credentials', {
        redirect: false,
        username: email,
        password: password,
      });

      if (response.ok) {
        // setAuthToken(response.data?.token);
        // doSetUser(response.data?.subscriber, response.data?.token);
        set_loading(false);
        set_email('');
        set_password('');
        router.push('/checkout/payment');
      } else {
        set_loading(false);
        set_server_err('Some Server Error');
      }
    } catch (e) {
      console.log(e);
      set_loading(false);
      set_server_err('Some Server Error');
    }
  };
  return (
    <div className={styles.c_register_container}>
      <div className={styles.title_container}>
      <h6>
          <img src='/Assets/new_logo_new.png' />
          Mintdropz
        </h6>
        <p>
          Mintdropz is a NFT Wallet that allows you to buy, sell, trade, and
          display your NFT’s!{' '}
        </p>
      </div>
      {server_err ? <Alert color='danger'>{server_err}</Alert> : ''}
      <div className={styles.login_form_container}>
        <div className='form-input-container'>
          <label>Email</label>
          <input
            value={email}
            onChange={e => {
              set_email(e.target.value);
            }}
            type='text'
            placeholder='Enter Email'
          />
        </div>
        <div className='form-input-container'>
          <label>Password</label>
          <input
            value={password}
            onChange={e => {
              set_password(e.target.value);
            }}
            type='password'
            placeholder='Enter Password'
          />
        </div>
        <div className={styles.reg_bottom_sec}>
        <span className='mt-2'>
          Don't Have an Account ?{' '}
          <a
            onClick={() => {
              set_login(false);
            }}
            href='#'
          >
            Register
          </a>
        </span>
          <button
            onClick={doLogin}
            disabled={is_loading ? 'disabled' : ''}
            className='btn btn-dark '
          >
            {!is_loading ? 'Login' : 'Loading...'}
          </button>
        </div>
      </div>
    </div>
  );
};


export default CheckoutLogin;
