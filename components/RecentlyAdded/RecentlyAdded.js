import React from 'react';
import styles from './r-added.module.scss';
const RecentlyAdded = () => {
  return (
    <div className={styles.recently_added_container}>
      <h1>Recently Minted Tokens</h1>
      <div className={styles.img_container}>
        <img src='/Assets/alpha_prods/token.png' />
      </div>
      <div className={styles.bottom_container}>
        <h1>The Exclusive Alpha Betas NFT Collection</h1>
        <p>
          In Alpha Betas, video games are powering the world thanks to a
          massive, top-secret CIA program. The show follows an elite virtual
          strike force of four top gamers as they drop into the virtual realms
          of video games to fix potentially world-ending issues. Known as the
          Alpha Team, these four willfully reckless and dangerously arrogant
          guys are the tip of a five-hundred billion dollar US Government spear
          sent to be heroes in high-octane pixelated worlds.
        </p>
      </div>
    </div>
  );
};

export default RecentlyAdded;
