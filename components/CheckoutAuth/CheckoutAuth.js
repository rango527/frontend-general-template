import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckoutRegister from './CheckoutRegister';
import CheckoutLogin from './CheckoutLogin';
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

const CheckoutAuth = ({ auth }) => {
  const router = useRouter();
  const [is_login, set_login] = useState(false);
  useEffect(() => {
    if (auth) {
      router.push('/checkout/payment');
    }
  }, []); 
  return (
    <div className={styles.check_auth_container}>
      <div className={styles.title_container} >
        <h2>{is_login ? "Login To Checkout":"Signup To Checkout"}</h2>
      </div>
      {is_login ? ( 
        <CheckoutLogin
        set_login={set_login}
        />
      ) : (
        <CheckoutRegister
        set_login={set_login}
        />
      )}
    </div>
  );
};

export default CheckoutAuth;
