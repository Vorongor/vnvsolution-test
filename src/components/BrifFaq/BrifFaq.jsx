import React, { useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import style from './BrifFaq.module.css';
import IconArrowLeft from 'img/svg/LeftSvg';
import IconCloudUploadFill from 'img/svg/UploadSvg';
import IconBxlTelegram from 'img/svg/TelegramSvg';
import IconPhone from 'img/svg/PhoneSvg';
import IconMail from 'img/svg/EmailSvg';

const icons = [IconBxlTelegram, IconPhone, IconMail];

function BrifFaq() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnswer, setShow] = useState('showAll');
  const [showText, setShowText] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const handleVisibilityChange = visible => {
    setIsVisible(visible);
  };

  const [formData, setFormData] = useState({
    description: '',
    file: null,
    contactMethod: '',
  });
  function handleTogleShow(i) {
    if (showAnswer === i) {
      setShow('showAll');
      setShowText(false);
      return;
    }
    setShow(i);
    setShowText(true);
  }

  const handleInputChange = e => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex(prevIndex => (prevIndex + 1) % icons.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIconIndex];

  const faqList = [
    {
      question: 'Do I need to sign a contract before starting work?',
      answer:
        'Yes, after discussing the work plan, we sign a contract together using a digital signature. The contract regulates the entire work process, payments, any unforeseen circumstances, and other important parts of the project. This document protects both the client and the contractor.',
    },
    {
      question: 'Is it possible to get a refund after payment?',
      answer:
        'Yes, it is possible. Here`s how it works: in any case, a 5% fee and bank commission are deducted from the refund amount. Money is refunded only for project stages that have not been started. All work that has been completed and paid for is delivered to the client. Stages that have been started are always completed (at the client`s discretion).',
    },
    {
      question: 'How is payment made?',
      answer:
        'There are two payment options: full upfront payment and installment payment. Full upfront payment involves transferring the entire project amount at the beginning of the collaboration. Installment payment involves paying in installments for each stage (or several). An invoice (receipt) with information about the paid service or stage is attached to each payment transaction.',
    },
    {
      question: 'Can you work on an existing website?',
      answer:
        'No, only create a website from scratch. An existing website can be used as a reference for design, content, and other aspects, but it does not reduce the cost of the service.',
    },
    {
      question: 'Can I choose only one stage and not the entire service?',
      answer:
        'No, it is only possible to order a full-service. In some cases, with the client`s consent and prior discussion, it is possible to exclude 1-2 stages from the service. The cost of a project with fewer work stages is reduced.',
    },
  ];

  return (
    <section className={style.container}>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <h3 className={`${style.title} ${isVisible ? style.visible : ''}`}>
          <span
            className={`${style.brifTitle} ${isVisible ? style.visible : ''}`}
          >
            Fast Order!
          </span>
          <span
            className={`${style.faqTitle} ${isVisible ? style.visible : ''}`}
          >
            FAQ
          </span>
        </h3>
      </VisibilitySensor>
      <div className={style.tab}>
        <div className={style.brif}>
          <form className={style.form} action="submit" onSubmit={handleSubmit}>
            <textarea
              className={style.textarea}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="This is the place for your great idea!"
            />
            <label className={style.upload}>Or download it here
              <IconCloudUploadFill className={style.icon} />
              <input
                type="file"
                name="file"
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />
            </label>
            <div style={{ width: '80%', height: '10%', position: 'relative' }}>
              <input
                type="text"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleInputChange}
                className={style.input}
                placeholder="How to get in touch with you?"
              />
              <span className={style.changedIcon}>
                <CurrentIcon />
              </span>
            </div>
            <button className={style.submit}>Send!</button>
          </form>
        </div>
        <div className={style.faq}>
          {faqList.map((item, index) => (
            <div
              className={`${style.box} ${
                showAnswer === 'showAll'
                  ? ''
                  : showAnswer === index
                  ? style.large
                  : style.went
              }`}
              key={index}
            >
              <div className={style.questionBox}>
                <p className={style.question}>{item.question}</p>
                <button
                  type="button"
                  onClick={() => handleTogleShow(index)}
                  className={style.showHide}
                >
                  <IconArrowLeft style={{ fill: 'whitesmoke' }} />
                </button>
              </div>
              {showAnswer === index && showText && (
                <div className={style.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BrifFaq;
