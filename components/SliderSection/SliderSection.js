import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import styles from './slider.module.scss';

const items = [
  {
    src: '/Assets/bad_bears/slider.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: '/Assets/bad_bears/slider.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: '/Assets/bad_bears/slider.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

const SliderSection = ({heading}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className={styles.slider_container}>
      {heading?(
      <h1>Exclusive <span>ALPHA BETAS Series</span></h1>
      ):""}
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
      </Carousel>
    </div>
  );
};

export default SliderSection;
