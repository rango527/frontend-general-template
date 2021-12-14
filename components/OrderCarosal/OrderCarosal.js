import React from 'react';
import Slider from 'react-slick';
import styles from './order-car.module.scss';

const OrderCarosal = ({ order }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className={styles.car_container}>
      <Slider {...settings}>
        {order?.items.map(item => {
          console.log(item)
          return (
            <div className={styles.img_container}>
              <img src={item?.product?.thumbnail?.url} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default OrderCarosal;
