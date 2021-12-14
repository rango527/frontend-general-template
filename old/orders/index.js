import React, { useEffect, useState } from 'react';
import { getSession ,useSession} from "next-auth/client"
import { Container } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import styles from './orders.module.scss';
import axios from 'axios';
import { URL, OWNER_ID } from '../../utils/config/server-config';

const btn_light = {
  backgroundColor: '#ffffff',
  color: '#ef5da8',
  border: '1px solid #ffffff',
};

const btn_primary = {
  backgroundColor: '#ef5da8',
  color: '#ffffff',
  border: '1px solid #ef5da8',
};

const MyOrders = ({orders}) => {
  const [session, loading] = useSession();
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);
  console.log(orders , "check me")
  // const [orders, set_orders] = useState(null);
  // useEffect(() => {
  //   if(!loading){
  //     set_loading(true);
  //     axios
  //       .get(
  //         URL+'/subscriber/shopping/orders',
  //         {
  //             headers: {
  //                 Authorization:
  //                 `Bearer ${session?.user?.email}`,
  //               },
  //         }
  //       )
  //       .then(response => {
  //         console.log(response.data, 'order=====-');
  //         set_loading(false);
  //         set_orders(response.data);
  //       })
  //       .catch(err => {
  //         set_server_err('some server error');
  //         set_loading(false);
  //         console.log(err);
  //       });
  //   }
  // }, []);

  const mintNFT = async()=>{
    try{
      
      // let firstResponse = await axios.get(
      //   `https://api-eu1.tatum.io/v3/nft/balance/ETH/0xe8db0b0f9af5006e4883edb13ee9709b8b9f7aaebcc2a4fb466bd3470286be86`,
      //   {
      //     headers: {
      //       'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
      //     },
      //   }
      // );
      // let secondResponse = await axios.get(
      //   `https://api-eu1.tatum.io/v3/nft/metadata/ETH/0xe8db0b0f9af5006e4883edb13ee9709b8b9f7aaebcc2a4fb466bd3470286be86`,
      //   {
      //     headers: {
      //       'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
      //     },
      //   }
      // );
      // console.log(firstResponse.data , "check final")
      // console.log(secondResponse.data , "check final 2")
      // let addressResponse = await axios.get(
      //   `https://api-eu1.tatum.io/v3/nft/transaction/ETH/0x3111f74122226c63dd63f3a6172e9f2ed30d94b144e1013c490c45ffb97d7d36`,
      //   {
      //     headers: {
      //       'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
      //     },
      //   }
      // );
      let addressResponse = await axios.get(
        `https://api-eu1.tatum.io/v3/nft/transaction/ETH/0x3111f74122226c63dd63f3a6172e9f2ed30d94b144e1013c490c45ffb97d7d36`,
        {
          headers: {
            'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
          },
        }
      );
      console.log(addressResponse.data.contractAddress , "address............")
      // let response = await axios.post(
      //   `https://api-eu1.tatum.io/v3/ethereum/erc721/mint`,
      //   {
      //     fromPrivateKey:"0x0365b6fbf97b0f1d7499a93373228156a13a2028747e315844570e67c2c5e76a",
      //     tokenId: "100000",
      //     to: "0x4057982F9ad0679f675676c6BAC88993ce33d26D",
      //     contractAddress:addressResponse.data.contractAddress,
      //     url:"https://gateway.pinata.cloud/ipfs/QmRNTzSXugFwXyL5C1RsG3oHsz7Pzui9be5CF1DZArQ1ZC",
      //     nonce:3,
      //     fee: {
      //       gasLimit: "40000",
      //       gasPrice: "20"
      //     }
      //   },
      //   {
      //     headers: {
      //       'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
      //       'content-type': 'application/json',
      //     },
      //   }
      // );

      // let transResponse = await axios.post(
      //   `https://api-eu1.tatum.io/v3/nft/transaction`,
      //   {
      //     tokenId: "1",
      //     chain: "ETH",
      //     to: "0x4057982F9ad0679f675676c6BAC88993ce33d26D",
      //     contractAddress:addressResponse.data.contractAddress,
      //     fromPrivateKey: "0x0365b6fbf97b0f1d7499a93373228156a13a2028747e315844570e67c2c5e76a",
      //     feeCurrency: "ETH"
      //   },
      //   {
      //     headers: {
      //       'x-api-key': '7f1c3de8-7d19-4a2d-824f-f9677202b46f',
      //       'content-type': 'application/json',
      //     },
      //   }
      // );
      // console.log(response.data , "final response");
      // console.log(transResponse.data , "transfet data............")
    }catch(e){
      console.log(e , "min err")
    }
  }
  return (
    <Container fluid className='p-0'>
      <section className={styles.orders_container}>
        <span className='d-none d-md-block'>
          <Navbar btn_primary={btn_primary} btn_light={btn_light} />
        </span>
        <div className={styles.orders_content}>
          <button onClick={mintNFT} >MINT NFT</button>
          {/* {is_loading ? <p>Loading......</p> : ''}
          {orders
            ? orders.map(item => {
                return (
                  <div className={styles.order_item_container}>
                    <div className={styles.order_item_content}>
                      <p>Order # 4545dds4</p>
                      <div className={styles.personal_info}>
                        <div className={styles.info_item}>
                          <p>Email:</p>
                          <small>{item?.buyer?.email}</small>
                        </div>
                        <div className={styles.info_item}>
                          <p>First Name:</p>
                          <small>{item?.buyer?.first_name}</small>
                        </div>
                        <div className={styles.info_item}>
                          <p>Last Name:</p>
                          <small>{item?.buyer?.last_name}</small>
                        </div> */}
                        {/* <div className={styles.info_item}>
                          <p>Country:</p>
                          <small>{item.shipping_details.country}</small>
                        </div>
                        <div className={styles.info_item}>
                          <p>Address:</p>
                          <small>{item.shipping_details.address}</small>
                        </div> */}
                        {/* <div className={styles.info_item}> */}
                          {/* <p>Postal:</p>
                          <small>{item.shipping.address.postal_code}</small> */}
                        {/* </div>
                      </div>
                    </div>
                    <div
                      style={{ paddingBottom: '1rem' }}
                      className={styles.order_products_container}
                    >
                      <div className={styles.order_products}>
                        {item.items.map(prod => {
                          return (
                            <div className={styles.cart_item_container}>
                              <div className={styles.item_grid_container}>
                                <div className={styles.img_container}>
                                  <img src='https://dame-dash-studios.s3.amazonaws.com/thumbnails/31I57QYdZFL.png' />
                                </div>
                                <div className={styles.c_item_content}>
                                  <p>{prod?.product?.name}</p>
                                  <small>{prod?.sizes[0]}</small>
                                  <small>
                                    {prod?.quantity} x ${prod?.product?.price}
                                  </small>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className={styles.total_container}>
                        <p>Total</p>
                        <p>${item.sub_total}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : ''} */}
        </div>
      </section>
    </Container>
  );
}; 

// export async function getServerSideProps(context) {
//   let session = await getSession(context);
//   let response = await axios.get(URL + '/subscriber/shopping/orders', {
//     headers: {
//       Authorization: `Bearer ${session?.user?.email}`,
//     },
//   });
//   console.log(response.data , "orders------------");
//   return {
//     props: {
//       orders: response.data,
//     },
//   };
// }
export default MyOrders;
