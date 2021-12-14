import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./roadmap.module.scss";
const RoadmapSection = ({ data, isShow }) => {
  return (
    <div className={styles.roadmap_container}>
      <img className={styles.top_img} src="/Assets/bad_bears/roadmap_top.png" />
      <section className={styles.roadmap_header}>
        <h1>
          The
          <img src="/Assets/alpha_new/Logo.png" />
          Roadmap
        </h1>
        <p>
          Alpha Betas is a collection of 9,999 NFTs—unique digital collectibles
          living on the Ethereum blockchain. Your Alpha Betas Token doubles as
          your Membership to the Club and grants access to members-only benefits
          like access to the Alpha Betas Series, exclusive merch, and more!{" "}
        </p>
      </section>
      <section className={styles.roadmap_body}>
        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={2}></Col>
            <Col sm={12} md={6}>
              <section className={styles.sec_left}>
                <img src={"/Assets/alpha_new/roadmap/b1.png"} />
                <div className={styles.content_container}>
                  <h1>25% SOLD </h1>
                  <h1 className={styles.is_colored}>ALPHA BETAS CLUB</h1>
                  <p>
                    Alpha Betas is a collection of 10,000 NFTs—unique digital
                    collectibles living on the Ethereum blockchain. Your Alpha
                    Betas Token doubles as your Membership to the Club and
                    grants access to members-only benefits like access to the
                    Alpha Betas Series, exclusive merch, and more!
                  </p>
                </div>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_right}>
                <img src="/Assets/bad_bears/b_1.png" />
              </section>
            </Col>
          </Row>
        </div>
        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={6}>
              <section className={styles.sec_left}>
                <img src={"/Assets/alpha_new/roadmap/b2.png"} />
                <div className={styles.content_container}>
                  <h1>50% SOLD </h1>
                  <h1 className={styles.is_colored}>ALPHA BETAS CLUB</h1>
                  <p>
                    Alpha Betas is a collection of 10,000 NFTs—unique digital
                    collectibles living on the Ethereum blockchain. Your Alpha
                    Betas Token doubles as your Membership to the Club and
                    grants access to members-only benefits like access to the
                    Alpha Betas Series, exclusive merch, and more!
                  </p>
                </div>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_right}>
                <img src="/Assets/bad_bears/b_2.png" />
              </section>
            </Col>
            <Col sm={12} md={2}></Col>
          </Row>
        </div>
        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={2}></Col>
            <Col sm={12} md={6}>
              <section className={styles.sec_left}>
                <img src={"/Assets/alpha_new/roadmap/b3.png"} />
                <div className={styles.content_container}>
                  <h1>75% SOLD </h1>
                  <h1 className={styles.is_colored}>ALPHA BETAS CLUB</h1>
                  <p>
                    Alpha Betas is a collection of 10,000 NFTs—unique digital
                    collectibles living on the Ethereum blockchain. Your Alpha
                    Betas Token doubles as your Membership to the Club and
                    grants access to members-only benefits like access to the
                    Alpha Betas Series, exclusive merch, and more!
                  </p>
                </div>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_right}>
                <img src="/Assets/bad_bears/b_3.png" />
              </section>
            </Col>
          </Row>
        </div>
        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={6}>
              <section className={styles.sec_left}>
                <img src={"/Assets/alpha_new/roadmap/b4.png"} />
                <div className={styles.content_container}>
                  <h1>100% SOLD </h1>
                  <h1 className={styles.is_colored}>ALPHA BETAS CLUB</h1>
                  <p>
                    Alpha Betas is a collection of 10,000 NFTs—unique digital
                    collectibles living on the Ethereum blockchain. Your Alpha
                    Betas Token doubles as your Membership to the Club and
                    grants access to members-only benefits like access to the
                    Alpha Betas Series, exclusive merch, and more!
                  </p>
                </div>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_right}>
                <img src="/Assets/bad_bears/p_3.png" />
              </section>
            </Col>
            <Col sm={12} md={2}></Col>
          </Row>
        </div>
      </section>
      {isShow ? (
        <section className={styles.roadmap_footer}>
          <button className="btn">
          Join Discord 
            <img src="/Assets/alpha_new/three_arrow.svg" />
          </button>
          <button className="btn">
          Sign Up For Email 
            <img src="/Assets/alpha_new/three_arrow.svg" />
          </button>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default RoadmapSection;
