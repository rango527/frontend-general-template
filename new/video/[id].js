import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import styles from './video.module.scss';
import axios from 'axios';
import { URL } from '../../utils/config/server-config';
const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [is_loading, set_loading] = useState(false);
  const [server_err, set_server_err] = useState(null);
  const [c_video, set_c_video] = useState(null);

  const fetchVideo = async () => {
    let token = localStorage.token;
    console.log(token);
    if (token) {
      set_loading(true);
      try {
        let response = await axios.get(URL + '/subscriber/home/videos/' + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data, 'final video');
        set_c_video(response.data);
        set_loading(false);
      } catch (e) {
        set_loading(false);
      }
    } else {
      router.push('/');
    }
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <div className={styles.video_page_container}>
      <Navbar />
      <div className={styles.c_video_content}>
        {is_loading ? <h3 style={{ color: 'white' }}>Loading....</h3> : ''}
        <div className={styles.video_container}>
          {c_video && (
            <video controls>
              <source src={c_video?.videoUrl} type='video/mp4' />
            </video>
          )}
        </div>
        <div className={styles.content_sec}>
          <h1>{c_video?.name}</h1>
          <p>{c_video?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
