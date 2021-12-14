import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Alert } from 'reactstrap';
import styles from '../styles/register.module.scss';
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

const Register = () => {
  const router = useRouter();
  let { doSetUser } = useAuthContext();
  const [f_name, set_f_name] = useState('');
  const [l_name, set_l_name] = useState('');
  const [email, set_email] = useState('');
  const [username, set_username] = useState('');
  const [password, set_password] = useState('');
  const [mnemonic, set_mnemonic] = useState('');
  const [phone, set_phone] = useState('');
  const [p_image, set_p_image] = useState('');
  const [client_errors, set_client_errors] = useState({
    f_name: '',
    l_name: '',
    username:'',
    email: '',
    password: '',
    phone: '',
  });
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);

  const getMnemonic = async () => {
    try {
      let response = await axios.get(URL + '/generate-mnemonic');
      console.log(response.data.mnemonic, 'd');
      set_mnemonic(response.data?.mnemonic);
    } catch (e) {
      set_server_err('Some Server Error');
    }
  };
  useEffect(() => {
    // getMnemonic();
  }, []);

  const clearErrors = () => {
    set_client_errors({
      f_name: '',
      l_name: '',
      email: '',
      password: '',
      phone: '',
    });
    set_server_err(null);
  };

  const doSetInitalState = () => {
    set_f_name('');
    set_l_name('');
    set_email('');
    set_password('');
    set_mnemonic('');
    set_phone('');
    set_p_image('');
  };

  const createWallet = async () => {
    try {
      let walletResponse = await axios.get(
        'https://api-eu1.tatum.io/v3/ethereum/wallet',
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
          },
        }
      );
      let accountResponse = await axios.post(
        `https://api-eu1.tatum.io/v3/ledger/account`,
        {
          currency: 'ETH',
          xpub: walletResponse.data.xpub,
          accountingCurrency: 'USD',
          customer: { externalId: 'samuel.sramko@tatum.io' },
        },
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
            'content-type': 'application/json',
          },
        }
      );

      let addressResponse = await axios.get(
        `https://api-eu1.tatum.io/v3/ethereum/address/${walletResponse.data.xpub}/1`,
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
          },
        }
      );
      let privResponse = await axios.post(
        `https://api-eu1.tatum.io/v3/ethereum/wallet/priv`,
        {
          index: 1,
          mnemonic: walletResponse.data.mnemonic,
        },
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
            'content-type': 'application/json',
          },
        }
      );
      console.log(accountResponse, 'account response');
      console.log(privResponse, 'private key');
      console.log(addressResponse, 'address');
      console.log(walletResponse, 'wallet');
      return {
        wallet: walletResponse.data,
        walletAddress: addressResponse.data,
        privateKey: privResponse.data,
        account: accountResponse.data,
      };
    } catch (e) {
      console.log(e.response, 'TATum');
      set_server_err(e);
    }
  };

  const doRegister = async () => {
    // let walletResponse = await axios.post(
    //   'https://api-eu1.tatum.io/v3/ethereum/erc721/deploy',
    //   {
    //     headers: {
    //       'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
    //     },
    //   }
    // );


    let errorsCopy = { ...client_errors };
    let isError = false;
    if (!f_name) {
      errorsCopy.f_name = 'First Name is Required';
      isError = true;
    }
    if (!l_name) {
      errorsCopy.l_name = 'Last Name is Required';
      isError = true;
    }
    if (!email) {
      errorsCopy.email = 'Email is Required';
      isError = true;
    }
    if (!username) {
      errorsCopy.username = 'Username is Required';
      isError = true;
    }
    if (!password) {
      errorsCopy.password = 'Password is Required';
      isError = true;
    }
    // if (!mnemonic) {
    //   errorsCopy.mnemonic = 'Mnemonic is Required';
    //   isError = true;
    // }
    if (!phone) {
      errorsCopy.phone = 'Phone is Required';
      isError = true;
    }
    if (isError) {
      set_client_errors({ ...errorsCopy });
    } else {
      let final_data = {
        email: email,
        password: password,
        username: username,
        user_type: 'subscriber',
        data: {
          owner: {
            kind: 'creator',
            item: OWNER_ID,
          },
          primary_contact: phone,
          mnemonic: mnemonic,
          display_picture: p_image,
          first_name: f_name,
          last_name: l_name,
        },
      };
      set_loading(true);
      try {
        let response = await axios.post(URL + '/signup', final_data);
        let tatumResponse = await createWallet();
        console.log(tatumResponse, 'TATUM');
        console.log(response.data, 'final response');
        setAuthToken(response.data?.token);
        doSetUser(response.data?.subscriber, response.data?.token);
        doSetInitalState();
        set_loading(false);
        router.push('/login');
      } catch (e) { 
        console.log(e.response.data);
        set_loading(false);
        set_server_err(
          e.response.data ? e.response.data : [{ error: "'Some Server Error'" }]
        );
      }
    }
  };
 
  return (
    <div className={styles.register_container}>
      <Row>
        <Col sm={12} md={6}>
          <div className={styles.register_prof_content}>
            <div className={styles.logo_container}>
              <img src='/Assets/logo_new.png' />
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.register_content}>
          <div className={styles.logo_container}>
              <img src='/Assets/logo_new.png' />
            </div>
            <div className={styles.title_container}>
              <h2>Register</h2>
            </div>
            {server_err
              ? server_err?.map(e => {
                  return <Alert color='danger'>{e.error}</Alert>;
                })
              : ''}
            <div className={styles.reg_form_container}>
              <div className='form-input-container'>
                <label>First Name</label>
                <input
                  value={f_name}
                  onChange={e => {
                    clearErrors();
                    set_f_name(e.target.value);
                  }}
                  type='text'
                  placeholder='Enter First Name'
                />
                <small className='text-danger ms-2'>
                  {client_errors.f_name}
                </small>
              </div> 
              <div className='form-input-container'>
                <label>Last Name</label>
                <input
                  value={l_name}
                  onChange={e => {
                    clearErrors();
                    set_l_name(e.target.value);
                  }}
                  type='text'
                  placeholder='Enter Last Name'
                />
                <small className='text-danger ms-2'>
                  {client_errors.l_name}
                </small>
              </div>
              <div className='form-input-container'>
                <label>Username</label>
                <input
                  value={username}
                  onChange={e => {
                    clearErrors();
                    set_username(e.target.value);
                  }}
                  type='text'
                  placeholder='Enter Username'
                />
                <small className='text-danger ms-2'>
                  {client_errors.username}
                </small>
              </div>
              <div className='form-input-container'>
                <label>Email</label>
                <input
                  value={email}
                  onChange={e => {
                    clearErrors();
                    set_email(e.target.value);
                  }}
                  type='text'
                  placeholder='Enter Email'
                />
                <small className='text-danger ms-2'>
                  {client_errors.email}
                </small>
              </div>
              <div className='form-input-container'>
                <label>Password</label>
                <input
                  value={password}
                  onChange={e => {
                    clearErrors();
                    set_password(e.target.value);
                  }}
                  type='password'
                  placeholder='Enter Password'
                />
                <small className='text-danger ms-2'>
                  {client_errors.password}
                </small>
              </div>
              
              
              {/* <div className='form-input-container'>
                <label>Mnemonic</label>
                <textarea
                  value={mnemonic}
                  placeholder='Enter Mnemonic'
                  disabled
                />
                <small className='text-danger ms-2'>
                  {client_errors.mnemonic}
                </small>
              </div> */}
              <div className='form-input-container'>
                <label>Contact#</label>
                <input
                  value={phone}
                  onChange={e => {
                    clearErrors();
                    set_phone(e.target.value);
                  }}
                  type='text'
                  placeholder='Enter Phone #'
                />
                <small className='text-danger ms-2'>
                  {client_errors.phone}
                </small>
              </div>
              <div className='form-input-container'>
                <label>Profile Image</label>
                <input type='file' />
              </div>
              <div className='btn-container mt-2 w-100'>
                <button
                  disabled={is_loading ? 'disabled' : ''}
                  onClick={doRegister}
                  className='btn w-100 btn-block btn-dark'
                >
                  {is_loading ? 'Loading...' : 'Register'}
                </button>
              </div>
              <span className='mt-2'>
                Don't Have an Account ? <Link href='/login'>Login</Link>{' '}
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;