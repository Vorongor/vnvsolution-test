import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import style from './Media.module.css';
import IconLocation from 'img/svg/LocationSvg';
import IconMail from 'img/svg/EmailSvg';
import IconLinkedinCircled from 'img/svg/LinkedInSvg';
import IconFacebook from 'img/svg/FacebookSvg';
import IconInstagram from 'img/svg/InstagramSvg';

function Media() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = visible => {
    setIsVisible(visible);
  };

  return (
    <section className={style.container}>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <h3 className={`${style.title} ${isVisible ? style.visible : ''}`}>
          <span className={style.font}>Finde us on Sosial media</span>
        </h3>
      </VisibilitySensor>
      <div className={`${style.tab} ${isVisible ? style.visible : ''}`}>
        <a
          className={style.link}
          href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D1%96%D0%BA%D0%BB%D1%8C%D0%BE%D1%88%D0%B0,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.7835065,24.0144865,16z/data=!4m6!3m5!1s0x473ae7d4b02a2c4d:0xb2af24fc0f878a18!8m2!3d49.7835443!4d24.0178518!16s%2Fg%2F11fm9tmkkk?hl=uk&entry=ttu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconLocation
            className={style.icon}
            style={{ transform: 'scale(3)' }}
          />
          Location
        </a>
        <a
          className={style.link}
          href="mailto:%20team@vnv.solutions"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconMail className={style.icon} style={{ transform: 'scale(4)' }} />
          team@vnv.solutions
        </a>
        <a
          className={style.link}
          href="https://www.linkedin.com/company/vnv-tech/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconLinkedinCircled
            className={style.icon}
            style={{ transform: 'scale(3)' }}
          />
          LinkedIn
        </a>
        <a
          className={style.link}
          href="https://www.facebook.com/profile.php?id=100088433736254"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconFacebook
            className={style.icon}
            style={{ transform: 'scale(3)' }}
          />
          Facebook
        </a>
        <a
          className={style.link}
          href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconInstagram
            className={style.icon}
            style={{ transform: 'scale(3)' }}
          />
          Instagram
        </a>
      </div>
    </section>
  );
}
export default Media;
