import React, { useState, useEffect } from 'react';
import { getSession } from 'next-auth/client';
import { Col, Container, Row } from 'reactstrap';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import TopBreadCrumb from '../../components/TopBreadCrumb/TopBreadCrumb';
import Cart from '../../components/Cart/Cart';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import InfoForm from '../../components/InfoForm/InfoForm';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import CheckoutAuth from '../../components/CheckoutAuth/CheckoutAuth';
import Footer from '../../components/Footer/Footer';
import styles from './checkout.module.scss';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuthContext } from '../../context/auth';
const stripePromise = loadStripe(
  'pk_test_51IvpjREQzjNy4ZPVmyBsAUl01s6QgTNO1piu31aWfdbqvJKkIPJgSv2Ggvs0bc2Hb6zsLvYidB91UhPB49nGwP5c00ZsZ3Wfbr'
);

const Checkout = ({session}) => {
  let { user, token } = useAuthContext();
  const router = useRouter();
  const [cart_data, set_cart_data] = useState(null);
  const [total, set_total] = useState(0);

  useEffect(() => {
    if(session){
      router.push('/checkout/payment')
    }
    
    // console.log(user , token)
    let cartData = JSON.parse(localStorage.getItem('cart_items'));
    // console.log(cartData);
    if (cartData) {
      let price = cartData
        .map(item => item.price * item.quantity)
        .reduce((a, b) => a + b, 0);
      set_total(price);
      set_cart_data(cartData);
    }
    console.log(session , "b")

  }, []);
         
  const doRemoveCartItem = item => {
    let cartData = JSON.parse(localStorage.getItem('cart_items'));
    let filteredCartData = cartData.filter(cart => cart._id !== item._id);
    if (filteredCartData.length) {
      let price = filteredCartData
        .map(item => item.price * item.quantity)
        .reduce((a, b) => a + b, 0);
      set_total(price);
      set_cart_data(filteredCartData);
      localStorage.setItem('cart_items', JSON.stringify(filteredCartData));
    } else {
      set_total(0);
      set_cart_data(null);
      localStorage.removeItem('cart_items');
    }
  };
  return (
    <div className={styles.checkout_container}>
      <span className='d-none d-md-block'>
        <Navbar /> 
      </span>
      <TopBreadCrumb text='My Cart' />
      {/* {router.query.type === 'payment' ? <h2>Payment</h2>:""} */}
      <Row className='flex-column-reverse flex-md-row'>
        <Col sm={12} md={8}>
          {router.query.type === 'info' ? (
            <CheckoutAuth auth={token} />
          ) : router.query.type === 'payment' ? (
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          ) : (
            ''
          )}
        </Col>
        <Col sm={12} md={4}>
          {/* {router.query.type === 'payment' ? (
            <OrderDetail />
          ) : (
          )} */}
          <Cart
            total={total}
            data={cart_data}
            doRemoveCartItem={doRemoveCartItem}
          />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
export default Checkout;
