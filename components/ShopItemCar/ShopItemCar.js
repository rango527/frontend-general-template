import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './shopItem.module.scss';
import VIdeoCom from '../VIdeoCom/VIdeoCom';
const ShopItemCar = ({ data, heading, cat_id }) => {
  const [current_audio, set_current_audio] = useState('d.mp3');
  // console.log(data);
  const router = useRouter();
  let audioRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <section className={styles.movies_list_section}>
      <div className={styles.header_section}>
        <p>{data.length ? heading.name : ''}</p>
        {/* <small onClick={() => router.push('/shop/' + heading._id)}>
          View All
        </small> */}
      </div>
      <div className={styles.horizontal_scroll_container}>
        {data &&
          data.map((item, i) => {
            console.log(item, 'item=========');
            return (
              <div
                onClick={() => router.push('/product/' + item._id)}
                className={styles.movie_container}
              >
                {item.thumbnail.type === 'image' ? (
                  <div className={styles.img_container}>
                    <img
                      onError={e =>
                        (e.target.src =
                          'https://dame-dash-studios.s3.amazonaws.com/thumbnails/31I57QYdZFL.png')
                      }
                      src={item.thumbnail.url}
                    />
                  </div>
                ) : (
                  ''
                )}
                {item.thumbnail.type === 'audio' ? (
                  <div
                    onMouseOver={() => {
                      audioRef.current.src = item.thumbnail.url;
                      audioRef.current.play();
                    }}
                    onMouseOut={() => {
                      audioRef.current.src = '';
                      audioRef.current.pause();
                    }}
                    className={styles.audio_container}
                  >
                    <img
                      onError={e =>
                        (e.target.src =
                          'https://www.seamedu.com/blog/wp-content/uploads/2019/11/music-production-software-8.jpg')
                      }
                      src={
                        'https://www.seamedu.com/blog/wp-content/uploads/2019/11/music-production-software-8.jpg'
                      }
                    />
                  </div>
                ) : (
                  ''
                )}
                {item.thumbnail.type === 'video' ? (
                  <VIdeoCom url={item.thumbnail.url} />
                ) : (
                  ''
                )}
                <div className={styles.item_content}>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            );
          })}
      </div>
      <audio src={current_audio} ref={audioRef} autoPlay loop playsInline />
    </section>
  );
};

export default ShopItemCar;
