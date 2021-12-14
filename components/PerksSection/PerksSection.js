import React from "react";
import styles from "./perks.module.scss";
const PerksSection = ({ backImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${backImage})` }}
      className={styles.perks_container}
    >
      <div className={styles.perks_content}>
        <section className={styles.perks_header}>
          <h1>ALPHA BETAS Members Only Perks + Benefits </h1>
          <p>
            When you buy an Alpha Betas Token, you aren’t just getting an NFT.
            You get exclusive access to the Alpha Betas Series and Accesss to
            Merch that only buy!
          </p>
        </section>
        <section className={styles.perks_body}>
          <div className={styles.perks_item}>
            <img src="/Assets/bad_bears/p_1.png" />
            <p>9,999 NFT’s That Are Rare & Unique,Only You Own!</p>
          </div>
          <div className={styles.perks_item}>
            <img src="/Assets/bad_bears/p_2.png" />
            <p>Fair Launch, Fair Distrubution, all NFT’s Cost .09 ETH</p>
          </div>
          <div className={styles.perks_item}>
            <img src="/Assets/bad_bears/p_3.png" />
            <p>Special Access To The Series and Merch for NFT Holders Only </p>
          </div>
          <div className={styles.perks_item}>
            <img src="/Assets/bad_bears/p_4.png" />
            <p>Recruit to Expert Level Perks for the Top Fans</p>
          </div>
          <div className={styles.perks_item}>
            <img src="/Assets/bad_bears/p_5.png" />
            <p>Community only NFT Holder Access Private Discord Channels </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PerksSection;
