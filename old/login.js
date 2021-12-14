import React, { useEffect, useState } from 'react';
import { signIn, getProviders } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Alert } from 'reactstrap';
import styles from '../styles/login.module.scss';
import { useAuthContext } from '../context/auth';
import { URL, OWNER_ID } from '../utils/config/server-config';
import setAuthToken from '../utils/config/setAuthToken';
import axios from 'axios';

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

const Login = ({ providers }) => {
  const router = useRouter();
  let { doSetUser } = useAuthContext();
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);

  useEffect(() => {
    // console.log(providers, 'check it babay');
  }, []);



  
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
      console.log(response , "cllllllllllllllll")
      if (response.error) {
         // setAuthToken(response.data?.token);
        // doSetUser(response.data?.subscriber, response.data?.token);
        set_loading(false);
        console.log(response , "else")
        set_server_err('Some Server Error');
      } else {

        set_email('');
        set_password('');
        router.push('/');
      }
    } catch (e) {
      console.log(e);
      set_loading(false);
      set_server_err('Some Server Error');
    }
  };
  return (
    <div className={styles.login_container}>
      <Row>
        <Col sm={12} md={6}>
          <div className={styles.login_prof_content}>
            <div className={styles.logo_container}>
              <img src='/Assets/logo_new.png' />
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.login_content}>
          <div className={styles.logo_container}>
              <img src='/Assets/logo_new.png' />
            </div>
            <div className={styles.title_container}>
              <h2>Login</h2>
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
              <div className='btn-container mt-2 w-100'>
                <button
                  onClick={doLogin}
                  disabled={is_loading ? 'disabled' : ''}
                  className='btn w-100 btn-block btn-dark'
                >
                  {!is_loading ? 'Login' : 'Loading...'}
                </button>
              </div> 
              <span className='mt-2'>
                Already Have an Account ? <Link href='/register'>Register</Link>{' '}
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  console.log(providers, 'server');
  return {
    props: { providers },
  };
}

export default Login;