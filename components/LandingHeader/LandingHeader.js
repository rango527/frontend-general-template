import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./l-header.module.scss";
const LandingHeader = ({ showButton }) => {
  return (
    <div className={styles.landing_header_container}>
      <Row className="flex-column-reverse flex-md-row">
        <Col sm={12} md={6}>
          <section className={styles.header_sec_left}>
            <img src="/Assets/bad_bears/header.jpg" />
            {showButton ? (
              <button>
                GET ALPHA BETAS TOKENS
                <img src="/Assets/alpha_new/three_arrow.svg" />
              </button>
            ) : (
              ""
            )}
          </section>
        </Col>
        <Col sm={12} md={6}>
          <section className={styles.header_sec_right}>
            <img src="/Assets/bad_bears/header_right.png" />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default LandingHeader;
