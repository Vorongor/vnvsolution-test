import React, { useEffect } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import VisibilitySensor from 'react-visibility-sensor';
import style from './Projects.module.css';
import qualitiIMG from '../../img/fproj.jpg';
import sppedIMG from '../../img/sproj.jpg';
import promisingIMG from '../../img/thproj.jpg';
import { useState } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilityChange = visible => {
    setIsVisible(visible);
  };
  useEffect(() => {
    const swiper = new SwiperCore('.swiperContainer', {
      spaceBetween: 50,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      on: {
        slideChange: () => console.log('slide change'),
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className={style.container}>
      <div className={style.undertitle}>
        <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
          <h3 className={`${style.title} ${isVisible ? style.visible : ''}`}>
            Projects
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
            <span className={style.block}></span>
          </h3>
        </VisibilitySensor>
      </div>
      <div>
        <div className="swiperContainer" style={{ overflow: 'hidden' }}>
          <div className="swiper-wrapper">
            <div className={`swiper-slide ${style.slideOne}`}>
              <img src={qualitiIMG} alt="quality" className={style.img} />
            </div>
            <div className={`swiper-slide ${style.slideTwo}`}>
              <img src={sppedIMG} alt="quality" className={style.img} />
            </div>
            <div className={`swiper-slide ${style.slideThree}`}>
              <img src={promisingIMG} alt="quality" className={style.img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
