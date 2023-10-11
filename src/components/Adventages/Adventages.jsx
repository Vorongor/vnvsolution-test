import React, { useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import style from './Adventages.module.css';

import softIMG from '../../img/soft.jpg';
import IconPersonWorkspace from '../../img/svg/WorkSvg';
import eprIMG from '../../img/epr.jpg';
import IconUserGroup from '../../img/svg/GroupSvg';
import storeIMG from '../../img/store.jpg';
import IconAppstore from '../../img/svg/StoreSvg';
import supportIMG from '../../img/support.jpg';
import IconBxSupport from '../../img/svg/SupportSvg';
import botIMG from '../../img/bot.jpg';
import IconRobotHappyOutline from '../../img/svg/Bot2Svg';
import webTransIMG from '../../img/webTrans.jpg';
import IconSpiderWeb from '../../img/svg/SpiderWebSvg';

function Adventages() {
  const [currentBlock, setCurrentBlock] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const MIN_DRAG_DISTANCE = 400;

  const handleDragStart = e => {
    setDragging(true);
    setDragStartX(e.clientX);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setDragStartX(null);
  };

  const handleDragMove = e => {
    if (dragging) {
      const dragEndX = e.clientX;
      const deltaX = dragEndX - dragStartX;

      if (deltaX > MIN_DRAG_DISTANCE) {
        handlePreviousSlide();
      } else if (deltaX < -MIN_DRAG_DISTANCE) {
        handleNextSlide();
      }
    }
  };
  useEffect(() => {
    const tabElement = document.querySelector(`.${style.tab}`);

    tabElement.addEventListener('mousedown', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);

    return () => {
      tabElement.removeEventListener('mousedown', handleDragStart);
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  });

  const handleNextSlide = () => {
    const nextIndex = currentBlock + 1;
    if (nextIndex < sliderList.length) {
      setCurrentBlock(nextIndex);
    }
  };

  const handlePreviousSlide = () => {
    const previousIndex = currentBlock - 1;
    if (previousIndex >= 0) {
      setCurrentBlock(previousIndex);
    }
  };

  const handleBlockClick = index => {
    setCurrentBlock(index);
  };

  const sliderList = [
    {
      key: 'soft',
      arr: [
        {
          tip: 'Quality',
          text: 'Our team always prioritizes quality. We develop software that meets the highest quality standards.',
        },
        {
          tip: 'Speed',
          text: 'We develop software quickly and efficiently, so your business can start using it as soon as possible.',
        },
        {
          tip: 'Promising',
          text: 'Our solutions are developed with an eye toward future prospects, allowing your business to grow and evolve.',
        },
      ],
      img: softIMG,
      icon: IconPersonWorkspace,
    },
    {
      key: 'epr',
      arr: [
        {
          tip: 'Everyone Matters',
          text: "We challenge the 'everyone matters' philosophy and provide you with a unique ERP system that supports all aspects of your business.",
        },
        {
          tip: 'Leadership is Here To Serve',
          text: 'Our team of leaders is always ready to serve your needs and provide reliable support.',
        },
        {
          tip: 'Resilient',
          text: 'Our ERP system is resilient and ready to withstand any business challenges.',
        },
      ],
      img: eprIMG,
      icon: IconUserGroup,
    },
    {
      key: 'store',
      arr: [
        {
          tip: 'Continuous Improvements',
          text: 'We develop online stores taking into account the constant changes in the market and technologies.',
        },
        {
          tip: 'Quality',
          text: 'Our online stores are known for their high quality and reliability.',
        },
        {
          tip: 'Efficiency',
          text: 'We create efficient online stores that ensure your success in the virtual space.',
        },
      ],
      img: storeIMG,
      icon: IconAppstore,
    },
    {
      key: 'sup',
      arr: [
        {
          tip: 'Communication',
          text: 'We provide excellent communication with our clients and are always ready to listen to your needs.',
        },
        {
          tip: 'Improvement',
          text: 'Our team constantly works on improving your software to keep it up-to-date and efficient.',
        },
        {
          tip: 'Expertise',
          text: 'We have high expertise in software support and updates.',
        },
      ],
      img: supportIMG,
      icon: IconBxSupport,
    },
    {
      key: 'bot',
      arr: [
        {
          tip: 'Automation',
          text: 'We create innovative bots that automate many processes in your business.',
        },
        {
          tip: 'Innovation',
          text: 'Our solutions are characterized by innovative technologies and approaches.',
        },
        {
          tip: 'Quality',
          text: 'Our bots are reliable and ready to help you implement automation.',
        },
      ],
      img: botIMG,
      icon: IconRobotHappyOutline,
    },

    {
      key: 'web',
      arr: [
        {
          tip: 'Skills',
          text: 'Our team has high qualifications in website transferring, ensuring a seamless process.',
        },
        {
          tip: 'Experience',
          text: 'We have years of experience in transferring websites of any complexity.',
        },
        {
          tip: 'Result',
          text: 'We guarantee a quality result and reliability during the website transfer process.',
        },
      ],
      img: webTransIMG,
      icon: IconSpiderWeb,
    },
  ];
  const handleVisibilityChange = visible => {
    setIsVisible(visible);
  };

  const blockElements = sliderList.map((slider, index) => {
    const IconComponent = slider.icon;
    const isCurrent = currentBlock === index;
    return (
      <div
        key={slider.key}
        className={`${style.else} ${isCurrent ? style.current : ''}`}
        style={{
          backgroundImage: `linear-gradient(rgba(50, 50, 50, 0.6), rgba(50, 50, 50, 0.6)), url(${slider.img})`,
        }}
        onClick={() => handleBlockClick(index)}
      >
        {slider.arr.map(item => (
          <div key={item.tip} className={style.block}>
            <h5 className={style.tip}>{item.tip}</h5>
            {isCurrent && <p className={style.text}>{item.text}</p>}
          </div>
        ))}
        {isCurrent && (
           <a href="#contacts" className={`${style.btn} ${style.btnAnimated} ${style.btnWhite}`}>
           <p className={style.icon}>Order Now!</p>
         </a>
        )}
      </div>
    );
  });

  return (
    <section className={style.container}>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <h3 className={`${style.title} ${isVisible ? style.visible : ''}`}>
          Why Us?
        </h3>
      </VisibilitySensor>
      <div className={style.tab}>{blockElements}</div>
    </section>
  );
}

export default Adventages;
