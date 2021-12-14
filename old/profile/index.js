import React, { useEffect, useState } from 'react';
import { getSession ,useSession} from "next-auth/client"

import { Container } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import NavSm from "../../components/NavSm/NavSm";
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import EditProfile from '../../components/EditProfile/EditProfile';
import Orders from '../../components/Orders/Orders';
import QouteSec from '../../components/QouteSec/QouteSec';
import Footer from '../../components/Footer/Footer';
import styles from '../../styles/profile.module.scss';
import { bottom_data_dolly } from '../../utils/bottom.data';
import axios from 'axios';
import { URL, OWNER_ID } from '../../utils/config/server-config';

const Profile = ({orders}) => {
  console.log(orders , "hello")
  return (
    <Container fluid className='p-0'>
      <div className={styles.profile_container}>
          <Navbar />
          <NavSm/>
        <LandingHeader isDrop={true} />
        <EditProfile />
        <Orders orders={orders} />
        <QouteSec data={bottom_data_dolly} />
        {/* <SiteMap/> */}
        <Footer /> 
      </div>
    </Container>
  );
};



export async function getServerSideProps(context) {
  let session = await getSession(context);
  let orderResponse;
  try{
    let response = await axios.get(URL + '/subscriber/shopping/orders', {
      headers: {
        Authorization: `Bearer ${session?.user?.email}`,
      },
    });
    orderResponse = response.data
    console.log(response , "orders------------");
  }catch(e){
    console.log(e)
  }
  return {
    props: {
      orders: orderResponse ? orderResponse : null,
    },
  };
}


export default Profile;
