import React, { useEffect, useState } from 'react';
import { AuthWrapper } from '../context/auth';
import { Provider } from 'next-auth/client';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import setAuthToken from '../utils/setAuth/setAuth';

function MyApp({ Component, pageProps }) {
  console.log(pageProps.session, '_________________appp');
  useEffect(()=>{
    if (localStorage.token) {
      //set auth token  header auth
      setAuthToken(localStorage.token);
      // decode token and get user info and exp
    }
    
  },[])
  return (
    <Provider session={pageProps.session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </Provider>
  );
}

export default MyApp;
