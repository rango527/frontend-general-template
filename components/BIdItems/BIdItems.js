import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { bid_items } from '../../utils/prod.data';
import styles from './bid-items.module.scss';

const BidItems = ({ set_current_bid_item }) => {
  return (
    <div className={styles.bid_items_container}>
      <div className={styles.title_container}>
        <h1>Bid Items</h1>
      </div>
      <div className={styles.bid_items_content}>
        <Row>
          {bid_items.map(item => {
            return (
              <Col sm={12} md={4}>
                <div className={styles.p_card_container}>
                  <Card>
                    <img width='100%' src={item.image} alt='Card image cap' />
                    <CardBody>
                      {/* <h1>
                        {item.price} <small>USD</small>
                      </h1> */}
                      {/* <p>{item.minted}</p> */}
                      <a href='#bidForm'>
                        <button
                          onClick={() => set_current_bid_item(item)}
                          className='btn btn-dark btn-block'
                        >
                          Bid Now
                        </button>
                      </a>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default BidItems;
