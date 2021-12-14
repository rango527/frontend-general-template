import React, { useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/client';
import { Container } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import PublicProfileHeader from "../../components/PublicProfileHeader/PublicProfileHeader";
import PublicProfileNFTs from "../../components/PublicProfileNFTS/PublicProfileNFTs";
import QouteSec from '../../components/QouteSec/QouteSec';
import Footer from '../../components/Footer/Footer';
import styles from '../../styles/profile.module.scss';
import { bottom_data_dolly } from '../../utils/bottom.data';
import axios from 'axios';
import { URL, OWNER_ID } from '../../utils/config/server-config';

const PublicProfile = () => {
  return (
    <Container fluid className='p-0'>
      <div className={styles.profile_container}>
        <span className='d-none d-md-block'>
          <Navbar />
        </span>
        <PublicProfileHeader/>
        <PublicProfileNFTs/>
        <QouteSec data={bottom_data_dolly} />
        {/* <SiteMap/> */}
        <Footer />
      </div>
    </Container>
  );
};

export default PublicProfile;
