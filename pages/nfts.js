import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavSm from "../components/NavSm/NavSm";
import LandingHeader from '../components/LandingHeader/LandingHeader';
import NftList from '../components/NftList/NftList';
import FooterBefore from '../components/FooterBefore/FooterBefore';
import Footer from '../components/Footer/Footer';
import styles from '../styles/nfts.module.scss';
const nfts = () => {
  return (
    <div className={styles.nft_container}>
      <Navbar />
      <NavSm/>
      <LandingHeader />
      <NftList />
      <FooterBefore image='/Assets/alpha_new/nft_bottom_banner.png' />
      <Footer />
    </div>
  );
};

export default nfts;
