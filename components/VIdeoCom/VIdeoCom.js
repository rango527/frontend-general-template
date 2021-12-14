import React, { useRef } from 'react';
import styles from './vidcom.module.scss';
const VIdeoCom = ({ url }) => {
  let videoRef = useRef(null);
  return (
    <div
      onMouseOver={() => {
        videoRef.current.play();
      }}
      onMouseOut={() => {
        videoRef.current.pause();
      }}
      className={styles.video_container}
    >
      <video ref={videoRef}>
        <source src={url} type='video/mp4' />
      </video>
    </div>
  );
};

export default VIdeoCom;
