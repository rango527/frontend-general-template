import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./wellcome.module.scss";
const Wellcome = () => {
  return (
    <div className={styles.wellcome_container}>
      <Row>
        <Col sm={12} md={2}></Col>
        <Col sm={12} md={6}>
          <section className={styles.sec_left}>
            {/* <img src="/Assets/alpha_new/battery.png" /> */}
            <div className={styles.content_sec}>
              <h1>
                WELCOME TO THE
                <span>ALPHA BETAS CLUB</span>
              </h1>
              <p>
                Alpha Betas is a collection of 10,000 NFTs—unique digital
                collectibles living on the Ethereum blockchain. Your Alpha Betas
                Token doubles as your Membership to the Club and grants access
                to members-only benefits like access to the Alpha Betas Series,
                exclusive merch, and more!
              </p>
            </div>
          </section>
        </Col>
        <Col sm={12} md={4}>
          <section className={styles.sec_right}>
            <img src="/Assets/bad_bears/wellcome_right.jpg" />
            <button className="btn">Mint AB Token!</button>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Wellcome;
