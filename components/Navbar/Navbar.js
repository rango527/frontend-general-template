import React from 'react';
import Link from 'next/link';
import styles from './nav.module.scss';
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <section className={styles.logo_sec}>
        <img src='/Assets/alpha_new/Logo.png' />
      </section>
      <section className={styles.nav_item_sec}>
        <Link href='/'>
          <p>Home</p>
        </Link>
        <Link href='/landing'>
          <p>Alpha Betas Movies</p>
        </Link>
        <p>About Alpha Betas</p>
        <Link href='/shop'>
          <p>Members Only</p>
        </Link>
        <Link href='/nfts'>
          <p>MINT TOKENS</p>
        </Link>
      </section>
      <section className={styles.social_sec}>
        <img src='/Assets/alpha_new/social/Youtube.svg' />
        <img src='/Assets/alpha_new/social/Instagram.svg' />
        <img src='/Assets/alpha_new/social/Discord.svg' />
        <img src='/Assets/alpha_new/social/Twitter.svg' />
      </section>
    </div>
  );
};

export default Navbar;
