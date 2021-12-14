// import React from 'react';
// import { getSession } from 'next-auth/client';
// import { Container } from 'reactstrap';
// import Navbar from '../../components/Navbar/Navbar';
// import NavSm from '../../components/NavSm/NavSm';
// import ProductTray from '../../components/ProductTray/ProductTray';
// import styles from '../../styles/landing.module.scss';
// import { URL, OWNER_ID } from '../../utils/config/server-config';
// import axios from 'axios';
// const Gallary = ({ prod_tray, error, message }) => {
//   console.log(prod_tray, '.............a.................a................a');
//   return (
//     <Container fluid className='p-0'>
//       <div className={styles.landing_container}>
//         <Navbar />
//         <NavSm />
//         <br />
//         <br />
//         <br />
//         {prod_tray &&
//           prod_tray?.map(item => {
//             return <ProductTray title={item?._id?.name} tryItem={item?.gist} />;
//           })}
//       </div>
//     </Container>
//   );
// };

// export async function getServerSideProps(context) {
//   try {
//     let pords_response = await axios.get(
//       `${URL}/subscriber/products/by-category?owner=${OWNER_ID}`,
//       {
//         headers: {
//           Authorization:
//             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMGM1MmE3Y2ViMjE1MDAyZWQxZjE0ZCJ9LCJpYXQiOjE2MzE1NzYzNTB9.tlXzATOOpKQSor75fIEaHS8uhkwFTcahCgzqcyNXHbA',
//         },
//       }
//     );
//     console.log(pords_response, 'ssserv');
//     // let session = await getSession(context);
//     return {
//       props: {
//         prod_tray: pords_response.data?.data,
//         session: await getSession(context),
//       }, // will be passed to the page component as props
//     };
//   } catch (e) {
//     return {
//       props: {
//         error: JSON.stringify(e),
//         message: 'Some Server Error',
//       }, // will be passed to the page component as props
//     };
//   }
// }

// export default Gallary;
import React from 'react'

const index = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default index
