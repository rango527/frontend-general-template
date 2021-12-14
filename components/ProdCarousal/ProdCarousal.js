import React from 'react';
import Slider from 'react-slick';
import styles from './prod-car.module.scss';
const ProdCarousal = ({ data }) => {
  console.log(data, 'sdssdd');
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
        {data?.uploads.map(item => {
          console.log(item, 'sososos');
          return (
            <div className={styles.img_container}>
              {item.type === 'video' ? (
                <video width='320' height='240' controls>
                  <source src={item?.url} type='video/mp4' />
                </video>
              ) : (
                <img src={item?.url} />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProdCarousal;