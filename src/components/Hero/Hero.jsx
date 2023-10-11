import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import style from './Hero.module.css';
import heroPNG from '../../img/vnv.png';
import IconCloseOutline from 'img/svg/CloseSvg';
import IconCloudUploadFill from 'img/svg/UploadSvg';

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [close, setClose] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    contact: '',
    file: null,
  });

  const handleInputChange = event => {
    if (event.target.type === 'file') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleVisibilityChange = visible => {
    setIsVisible(visible);
  };

  const handleShow = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      setShowModal(false);
      setClose(false);
      document.body.classList.remove('modal-open');
    }, 2000);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log('Form Data:', formData);
    setFormData({
      description: '',
      contact: '',
      file: null,
    });
    form.reset();
    handleClose();
  };

  return (
    <div className={style.container}>
      <img src={heroPNG} alt="VNV Logo" className={style.img} />
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <h1 className={`${style.title} ${isVisible ? style.visible : ''}`}>
          <span className={style.span}> Easy, quality, IT</span>
          <span className={style.span}>- winning solutions</span>
          <span className={style.span}> for your business</span>
        </h1>
      </VisibilitySensor>
      <p className={style.text}>/ IT COMPANY</p>
      <button type="button" className={style.btn} onClick={handleShow}>
        Contact Us
      </button>
      {showModal && (
        <div className={`${style.modal} ${close ? style.close : ''}`}>
          <button className={style.closeBtn} onClick={handleClose}>
            <IconCloseOutline />
          </button>
          <p className={style.discount}>
            Make order now and get <span className={style.pers}> 15 % </span>{' '}
            discount
          </p>
          <form
            action="submit"
            className={style.form}
            onSubmit={handleFormSubmit}
          >
            <label className={style.label} htmlFor="fastText">
              <textarea
                name="description"
                id="fastText"
                className={style.textModal}
                placeholder="This field is intended for you to describe your dream project, and we will bring it to life!"
                required
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
              <label className={style.upload}>
                You can also upload a ready-made layout here.
                <IconCloudUploadFill className={style.icon} />
                <input
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                />
              </label>
            </label>

            <label className={style.label} htmlFor="fastContact">
              <input
                type="text"
                name="contact"
                id="fastContact"
                className={style.input}
                placeholder="Also, don`t forget to provide information on how to contact you and reach out to us!"
                required
                value={formData.contact}
                onChange={handleInputChange}
              />
            </label>
            <span className={style.sale}></span>
            <button className={style.orderBtn} type="submit">
              Make Order now!
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Hero;
