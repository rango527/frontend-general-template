import React from 'react';
import styles from './cart-item.module.scss';

const CartItem = ({ cartItem, doRemoveCartItem }) => {
  console.log(cartItem, 'Cart ITEM');
  return (
    <div className={styles.cart_item_container}>
      <div className={styles.item_grid_container}>
        <div className={styles.img_container}>
          {cartItem.thumbnail.type === 'video' ? (
            <video width='320' height='240' controls>
              <source src={cartItem.thumbnail.url} type='video/mp4' />
            </video>
          ) : (
            <img src={cartItem.thumbnail.url} />
          )}
        </div>
        <div className={styles.c_item_content}>
          <button
            onClick={() => doRemoveCartItem(cartItem)}
            style={{ cursor: 'pointer' }}
          >
            <img src='/Assets/Trash.svg' />
          </button>
          <p>{cartItem.name}</p>
          <small>{cartItem.selected}</small>
          <small>
            {cartItem.quantity} x ${cartItem.price}
          </small>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
