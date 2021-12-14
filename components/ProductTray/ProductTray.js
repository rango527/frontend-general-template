import React from 'react';
import { useRouter } from 'next/router';
import { Col, Row, Card, CardBody ,Badge} from 'reactstrap';
import styles from './prod-tray.module.scss';
 
const ProductTray = ({ tryItem, title }) => {
  const router = useRouter(); 
  console.log(tryItem , "-------------")
  return (
    <div className={styles.prod_tray_container}>
      <section className={styles.tray_header}>
        <p>{title}</p>
      </section>
      <div className={styles.tray_items_container}>
        <Row>
          {tryItem.map(item => {
            // console.log(item , "===================")
            return (
              <Col sm={12} md={4}>
                <div className={styles.p_card_container}>
                  <div
                    onClick={() => item.stock === 0 ? null :router.push('/product/' + item._id)}
                    className={styles.img_container}
                  >
                    {item?.thumbnail?.type === 'video' ? (
                      <video
                        autoPlay
                        playsInline
                        muted
                        src={item?.thumbnail?.url}
                      />
                    ) : (
                      <img
                        width='100%'
                        src={item?.thumbnail?.url}
                        alt='Card image cap'
                      />
                    )}
                  </div>
                  <div className={styles.card_body}>
                    <h1>
                      {item.name}
                    </h1>
                    {/* <p>{item?.stock} Minted</p> */}
                    {item.stock === 0 ?(
                    <div className={styles.sold_out_container} >
                    <span class="badge bg-danger">Sold Out</span>
                    </div >
                    ):""}
                    <button
                      onClick={() => item.stock === 0 ? null :router.push('/product/' + item._id)}
                      className='btn btn-dark btn-block'
                    >
                      View Item
                    </button>
                  </div>
                  <div className={styles.card_footer} >
                    <section className={styles.price_sec} >
                      <p> <span></span> Price</p>
                      <h6>${item.price}</h6>
                    </section>
                    <section className={styles.is_auc_sec} >
                    <p>Ending in</p>
                      <h6> <img src="/Assets/fire.svg" /> {item.in_auction ? "":"Open Edition"}</h6>
                    </section>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ProductTray;
