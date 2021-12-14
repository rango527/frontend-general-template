import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      {/* <section className={styles.footer_top}>
        <div className={styles.top_content}>
          <a href='https://mintdropz.com/' target='_blank'>
            <img src='/Assets/new_logo_new.png' />
          </a>
          <div className={styles.desc}>
            <h1>MINTDROPZ</h1>
            <p>
              Mintdropz empowers creators to launch their own NFT’s on their own
              <br />
              Platform with NFT’s, Merch, Content, Community, and more!
            </p>
            <p style={{ textAlign: 'center', marginRight: '3rem' }}>
              www.Mintdropz.com
            </p>
          </div>
        </div>
      </section> */}
      {/* <hr /> */}
      {/* <section className={styles.footer_mid}>
        <div className={styles.mid_content}>
          <div className={styles.form_container}>
            <input placeholder='Enter your email' />
            <button className='btn btn-primary btn-sm'>Subscribe</button>
          </div>
        </div>
      </section> */}
      {/* <hr /> */}
      <section className={styles.footer_bottom}>
        <div className={styles.social_container}>
          <img src='/Assets/alpha_new/Logo.png' />
          <div>
            <a href='https://www.instagram.com/sunnyleone/' target='_blank'>
              <img src='/Assets/alpha_new/social/Youtube.svg' />
            </a>
            <a href='https://twitter.com/SunnyLeone/' target='_blank'>
              <img src='/Assets/alpha_new/social/Instagram.svg' />
            </a>
            <a
              href='https://www.youtube.com/user/thesunnyleone'
              target='_blank'
            >
              <img src='/Assets/alpha_new/social/Discord.svg' />
            </a>
            <a href='https://discord.com/invite/vcfvYhRhuH' target='_blank'>
              <img src='/Assets/alpha_new/social/Twitter.svg' />
            </a>
          </div>
        </div>
        <div className={styles.terms_container + ' d-none d-md-flex'}>
          {/* <Link href='/terms'>
            <p>TERMS & CONDITIONS</p>
          </Link>
          <Link href='/privacy-policy'>
            <p>PRIVACY POLICY</p>
          </Link> */}
        </div>
        <div className={styles.social_container}>
          <img style={{ maxWidth: '100px' }} src='/Assets/logo_new.png' />
          <div>
            <a
              href='https://www.instagram.com/mintdropzofficial/'
              target='_blank'
            >
              <img src='/Assets/alpha_new/social/Youtube.svg' />
            </a>

            <a
              href='https://www.youtube.com/channel/UCd-i6wQFXCyvLwD3dhq2_qQ/videos'
              target='_blank'
            >
              <img src='/Assets/alpha_new/social/Instagram.svg' />
            </a>
            <a
              href='https://www.linkedin.com/company/mintdropz/'
              target='_blank'
            >
              <img src='/Assets/alpha_new/social/Discord.svg' />
            </a>
            <a href='https://discord.com/invite/vcfvYhRhuH' target='_blank'>
              <img src='/Assets/alpha_new/social/Twitter.svg' />
            </a>
          </div>
        </div>
        {/* <div className={styles.terms_container + ' d-flex d-md-none'}>
          <Link href='/terms'>
            <p>TERMS & CONDITIONS</p>
          </Link>
          <Link href='/privacy-policy'>
            <p>PRIVACY POLICY</p>
          </Link>
        </div> */}
      </section>
      <section className={styles.colored_line} >

      </section>
    </div>
  );
};

export default Footer;
