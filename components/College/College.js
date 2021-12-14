import React, { useState } from "react";
import { CarouselItem, Row, Col } from "reactstrap";
import Slider from "react-slick";
import styles from "./col.module.scss";
const items_mob = [
  {
    src: "/Assets/bad_bears/collge/center.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "/Assets/bad_bears/collge/left_1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/Assets/bad_bears/collge/left_2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "/Assets/bad_bears/collge/right_2.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "/Assets/bad_bears/collge/right_2.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const College = ({ heading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.slider_container}>
      <section className="d-block d-md-none p-3">
        <Slider {...settings}>
          {items_mob.map((item) => {
            return (
              <section className={styles.mob_slider}>
                <img src={item.src} />
              </section>
            ); 
          })} 
        </Slider>
      </section>
      <div className={styles.collage_container + " d-none d-md-block"}>
        {/* <section className={styles.top_img}>
          <img src="/Assets/alpha_new/sunny_logo.png" />
        </section> */}
        <Row>
          <Col xs={3}>
            <section className={styles.sec_left}>
              <img src="/Assets/bad_bears/collge/left_1.jpg" />
              <img src="/Assets/bad_bears/collge/left_2.jpg" />
            </section>
          </Col>
          <Col style={{ paddingRight: "0" }} xs={6}>
            <section className={styles.sec_mid}>
              <img src="/Assets/bad_bears/collge/center.jpg" />
            </section>
          </Col>
          <Col style={{ paddingLeft: "3px" }} xs={3}>
            <section className={styles.sec_left}>
              <img src="/Assets/bad_bears/collge/right_1.jpg" />
              <img src="/Assets/bad_bears/collge/right_2.jpg" />
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default College;