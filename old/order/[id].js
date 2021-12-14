import React from 'react';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/client';
import { Col, Container, Row } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import OrderDescription from '../../components/OrderDescription/OrderDescription';
import OrderCarosal from '../../components/OrderCarosal/OrderCarosal';
import QouteSec from '../../components/QouteSec/QouteSec';
import Footer from '../../components/Footer/Footer';
import styles from './order.module.scss';
import { bottom_data_dolly } from '../../utils/bottom.data';
import axios from 'axios';
import { URL, OWNER_ID } from '../../utils/config/server-config';
const OrderDetail = ({ order }) => {
  console.log(order, 'nennnnnnnnnnnnnn...');
  return (
    <div className={styles.order_container}>
      <Navbar />
      <Row>
        <Col sm={12} md={7}>
          <OrderCarosal order={order} />
        </Col>
        <Col sm={12} md={5}>
          <OrderDescription order={order} />
        </Col>
      </Row>
      <QouteSec data={bottom_data_dolly} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  let session = await getSession(context);
  const { id } = context.query;
  console.log(id, ',,..');
  let orderResponse;
  try {
    let response = await axios.get(URL + '/subscriber/shopping/orders/' + id, {
      headers: {
        Authorization: `Bearer ${session?.user?.email}`,
      },
    });
    console.log(response.data, '_......................');
    orderResponse = response.data;
  } catch (e) {
    console.log(e);
  }
  return {
    props: { 
      order: orderResponse ? orderResponse : null,
    },
  };
}

export default OrderDetail;