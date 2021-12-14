import React, { useState, useEffect } from 'react';
import styles from './cart.module.scss';
import CartItem from '../CartItem/CartItem';

const Cart = ({ data, doRemoveCartItem, total }) => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_header}>
        <p>Your Cart</p>
        <hr />
      </div>
      <div className={styles.cart_items}>
        {data
          ? data.map((item, i) => {
              return (
                <CartItem doRemoveCartItem={doRemoveCartItem} cartItem={item} />
              );
            })
          : 'NO CART ITEMS FOUND'}
      </div>
      <div className={styles.cart_footer}>
        {data ? (
          <>
            <div className={styles.footer_item}>
              {/* <h6>Shipping Fee:</h6>
              <h6>$ 10</h6> */}
            </div>
            <div className={styles.footer_item}>
              <h6>Total:</h6>
              <h6>$ {total}</h6>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Cart;
