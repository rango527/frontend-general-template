import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './sitemap.module.scss';

const SiteMap = () => {
  return (
    <div className={styles.site_map_container}>
      <Row>
        <Col sm={12} md={2}>
          <p>Solutions</p>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </Col>
        <Col sm={12} md={2}>
          <p>Support</p>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </Col>
        <Col sm={12} md={2}>
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </Col>
        <Col sm={12} md={2}>
          <p>Legal</p>
          <ul>
            <li>Claim</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </Col>
        <Col sm={12} md={4}>
            <p>
            Language & Currency
            </p>
            <select>
                <option>English</option>
            </select>
            <select>
                <option>AUD</option>
            </select>
        </Col>
      </Row>
    </div>
  );
};

export default SiteMap;