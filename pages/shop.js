import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavSm from "../components/NavSm/NavSm";
import LandingHeader from '../components/LandingHeader/LandingHeader';
import ExclusiveProducts from "../components/ExclusiveProducts/ExclusiveProducts";
import FooterBefore from '../components/FooterBefore/FooterBefore';
import Footer from '../components/Footer/Footer';
import styles from '../styles/shop.module.scss';
const Shop = () => {
  return (
    <div className={styles.shop_container}>
      <Navbar />
      <NavSm/>
      <LandingHeader showButton={false} />
      <ExclusiveProducts/>
      <FooterBefore image='/Assets/alpha_new/shop_bb.png' />
      <Footer />
    </div>
  );
};

export default Shop;
