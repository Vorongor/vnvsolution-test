import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import style from './Contacts.module.css';
import IconMail from 'img/svg/EmailSvg';
import IconBxlTelegram from 'img/svg/TelegramSvg';
import IconWhatsapp from 'img/svg/WhatsappSvg';
import IconViber from 'img/svg/ViberSvg';
import IconPhone from 'img/svg/PhoneSvg';
import IconShareSocialOutline from 'img/svg/OtherSocSvg';
import IconArrowGoBackLine from 'img/svg/BackSvg';

function Contacts() {
  const [isVisible, setIsVisible] = useState(false);
  const [choosenItem, setItem] = useState('');
  const [choosenWay, setWay] = useState('');
  const handleVisibilityChange = visible => {
    setIsVisible(visible);
  };
  function handleChoose(e) {
    setItem(e.currentTarget.id);
  }
  function handleWay(e) {
    setWay(e.currentTarget.id);
  }
  function handleBack() {
    setWay('');
  }
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const way = form.way.value;
    const feedback = form.feedback.value;
    const message = {
      name,
      way,
      feedback,
    };

    console.log(message);
    form.reset();
  }
  return (
    <div className={style.container}>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <h3
          id="contacts"
          className={`${style.title} ${isVisible ? style.visible : ''}`}
        >
          Contact Us!
        </h3>
      </VisibilitySensor>
      <div className={style.box}>
        <div className={style.socialMedia}>
          <ul className={style.list}>
            <h4 className={style.mediaTitle}>
              Social Media <span className={style.drop}>choose one</span>
            </h4>
            <li style={{ position: 'relative' }}>
              <button
                type="button"
                id="mail"
                className={`${style.item} ${
                  choosenItem === 'mail' ? style.choosen : ''
                }`}
                onClick={handleChoose}
              >
                <div className={style.icon}>
                  <IconMail style={{ transform: 'scale(1.4)' }} />
                </div>
                <p className={style.tip}>Email</p>
              </button>

              <p
                className={style.haiden}
                style={choosenItem === 'mail' ? { opacity: 1 } : { opacity: 0 }}
              >
                exemple@mail.com
              </p>
            </li>
            <li style={{ position: 'relative' }}>
              <button
                type="button"
                id="telegram"
                className={`${style.item} ${
                  choosenItem === 'telegram' ? style.choosen : ''
                }`}
                onClick={handleChoose}
              >
                <div className={style.icon}>
                  <IconBxlTelegram style={{ transform: 'scale(1.4)' }} />
                </div>
                <p className={style.tip}>Telegram</p>
              </button>
              <p
                className={style.haiden}
                style={
                  choosenItem === 'telegram' ? { opacity: 1 } : { opacity: 0 }
                }
              >
                @exemple_nik
              </p>
            </li>
            <li style={{ position: 'relative' }}>
              <button
                type="button"
                id="whatsapp"
                className={`${style.item} ${
                  choosenItem === 'whatsapp' ? style.choosen : ''
                }`}
                onClick={handleChoose}
              >
                <div className={style.icon}>
                  <IconWhatsapp style={{ transform: 'scale(1.4)' }} />
                </div>
                <p className={style.tip}>Whatsapp</p>
              </button>
              <p
                className={style.haiden}
                style={
                  choosenItem === 'whatsapp' ? { opacity: 1 } : { opacity: 0 }
                }
              >
                @exemple_name
              </p>
            </li>
            <li style={{ position: 'relative' }}>
              <button
                type="button"
                id="viber"
                className={`${style.item} ${
                  choosenItem === 'viber' ? style.choosen : ''
                }`}
                onClick={handleChoose}
              >
                <div className={style.icon}>
                  <IconViber style={{ transform: 'scale(1.4)' }} />
                </div>
                <p className={style.tip}>Viber</p>
              </button>
              <p
                className={style.haiden}
                style={
                  choosenItem === 'viber' ? { opacity: 1 } : { opacity: 0 }
                }
              >
                @exemple_user
              </p>
            </li>
          </ul>
        </div>
        <div className={style.feedBack}>
          <form className={style.form} action="submit" onSubmit={handleSubmit}>
            <button className={style.back} 
            style={
              choosenWay ? { opacity: 1 } : { opacity: 0 }
            }
            onClick={handleBack}>
              <IconArrowGoBackLine style={{ transform: 'scale(1.4)' }} />
            </button>
            <h5 className={style.formTitle}>Feedback is also possible</h5>
            <input
              className={style.name}
              name="name"
              type="text"
              placeholder="Your name..."
              required
            />
            {choosenWay === '' ? (
              <ul className={style.wayList}>
                <li className={style.wayItem}>
                  <button
                    id="wayPhone"
                    className={style.wayBtn}
                    onClick={handleWay}
                  >
                    <IconPhone style={{ transform: 'scale(1.4)' }} />
                  </button>
                </li>
                <li className={style.wayItem}>
                  <button
                    id="wayEmail"
                    className={style.wayBtn}
                    onClick={handleWay}
                  >
                    <IconMail style={{ transform: 'scale(1.4)' }} />
                  </button>
                </li>
                <li className={style.wayItem}>
                  <button
                    id="wayTell"
                    className={style.wayBtn}
                    onClick={handleWay}
                  >
                    <IconBxlTelegram style={{ transform: 'scale(1.4)' }} />
                  </button>
                </li>
                <li className={style.wayItem}>
                  <button
                    id="wayOther"
                    className={style.wayBtn}
                    onClick={handleWay}
                  >
                    <IconShareSocialOutline
                      style={{ transform: 'scale(1.4)' }}
                    />
                  </button>
                </li>
              </ul>
            ) : (
              <input
                className={style.way}
                name="way"
                type="text"
                placeholder="Way to conect with you"
                required
              />
            )}
            <textarea
              name="feedback"
              className={style.texarea}
              placeholder="And yor greatefull idea"
              required
            />
            <button type="submit" className={style.submit}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
