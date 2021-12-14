import React from 'react';
import styles from './t-bread.module.scss';
const TopBreadCrumb = ({ text }) => {
  return (
    <div className={styles.top_bread_container}>
      <div className={styles.arrow_container}>
        <img src='/Assets/Chevron left.svg' />
      </div>
      <div className={styles.middle_txt}>
          <p>{text}</p>
      </div>
      <div className={styles.left_text} >
          <p></p>
      </div>
    </div>
  );
};

export default TopBreadCrumb;
