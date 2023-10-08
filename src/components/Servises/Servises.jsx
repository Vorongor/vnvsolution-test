import React, { useState } from "react";
import style from "./Servises.module.css";
import VisibilitySensor from "react-visibility-sensor";
import IconCpu from "../../img/svg/CpuSvg";
import IconServer from "../../img/svg/EprSystemSVG";
import IconAppstore from "../../img/svg/StoreSvg";
import IconUpdate from "../../img/svg/UpdateSvg";
import IconRobot from "../../img/svg/BotSvg";
import IconTransfer from "../../img/svg/TransferSvg";

function Servises() {
  const servisesBase = [
    {
      title: "SOFTWARE DEVELOPMENT",
      list: ["Qualitatively", "Fast", "Promising"],
      coment: "/ QUALITY BIASED",
      article:
        "Our software is aiming to solve your business problems and meet specific business needs. Our experienced team can develop software for a wide range of industries and applications, especially agriculture, finance, healthcare, and logistics, among others. Our goal is to deliver high-quality software that will solve your business tasks and problems, and optimize your working processes to help your business grow.",
    },
    {
      title: "DEVELOPMENT OF A UNIQUE ERP SYSTEM",
      list: ["Everyone Matters", "Leadership is Here To Serve", "Resilient"],
      coment: "/ FRIENDLY RELATIONS",
      article:
        "Developing customized ERP (Enterprise Resource Planning) systems that streamline your' business operations, improve communication between departments and automate processes. Our ERP solutions are tailored to the unique needs of your business and can be integrated with other software solutions to provide a comprehensive business management system.",
    },
    {
      title: "ONLINE-STORE DEVELOPMENT",
      list: ["Continuous improvements", "Quality", "Efficiency"],
      coment: "/ EXPERIENCE & TRANSPARENCY",
      article:
        "We offer online-store development services for clients who want to create an online presence for their business. Our team can build and design a customized e-commerce website that is easy to use and provides a seamless user experience. Our goal is to help you increase your online sales, expand customer base, and improve overall business performance. Deep understanding and large experience allows us to build the most conversional online-stores for you.",
    },
    {
      title: "SUPPORT AND UPDATES",
      list: ["Communication", "Improvement", "Expertise"],
      coment: "/ IMPROVEMENTS",
      article:
        "We offer ongoing support and updates to ensure that your software solutions remain up-to-date and fully functional. Our support team is always ready to fix any issues or concerns that arise, so we provide regular updates to improve performance and add new features if needed. Our goal is to provide our clients with peace of mind and ensure that their software solutions continue to meet their needs over time.",
    },
    {
      title: "BOT DEVELOPMENT",
      list: ["Automation", "Innovation", "Quality"],
      coment: "/ SAFE",
      article:
        "We specialize in developing customized bots that can automate tasks and improve efficiency. We can create bots for a wide range of applications, including customer service, social media, and sales, among others. Our goal is to provide you with cutting-edge technology that improves their productivity and enhances their customer experience.",
    },
    {
      title: "WEBSITE TRANSFERRING",
      list: ["Skills", "Experience", "Result"],
      coment: "/ QUICKLY",
      article:
        "We offer website transferring services for clients who want to move their website from one platform to another. Our team of developers can ensure that the transition is smooth and seamless, and that the website remains fully functional throughout the process. Our goal is to minimize any disruptions to our clients' online presence and ensure that their website continues to meet their business needs.",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleBot, setIsVisibleBot] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [itemToRender, setItemToRender] = useState(servisesBase[0]);
  const [opacity, setOpacity] = useState(1);
  const handleVisibilityChange = (visible) => {
    setIsVisible(visible);
  };
  const handleVisibilityChangeBot = (visible) => {
    setIsVisibleBot(visible);
  };

  function handleChange(choosenItem) {
    setOpacity(0);
    setTimeout(() => {
      setItemToRender(choosenItem);
      setOpacity(1);
    }, 500);
  }
  const handleMenuChange = (menuItem) => {
    setActiveMenuItem(menuItem);
    const choosenItem = servisesBase.find((item) => item.title === menuItem);
    handleChange(choosenItem);
  };
  return (
    <section className={style.container}>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <h3 className={`${style.title} ${isVisible ? style.visible : ""}`}>
          Servises
        </h3>
      </VisibilitySensor>
      <div className={style.tab}>
        <ul className={style.tabMenu}>
          <span className={style.dot}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>
          <li
            className={`${style.item} ${
              activeMenuItem === "SOFTWARE DEVELOPMENT" ? style.active : ""
            }`}
          >
            <button
              className={style.btn}
              type="button"
              onClick={() => handleMenuChange("SOFTWARE DEVELOPMENT")}
              key={"SOFTWARE DEVELOPMENT"}
            >
              <div className={style.svg}>
                <IconCpu />
              </div>
              <p className={style.text}>SOFTWARE DEVELOPMENT</p>
            </button>
          </li>
          <li
            className={`${style.item} ${
              activeMenuItem === "DEVELOPMENT OF A UNIQUE ERP SYSTEM"
                ? style.active
                : ""
            }`}
          >
            <button
              className={style.btn}
              type="button"
              onClick={() =>
                handleMenuChange("DEVELOPMENT OF A UNIQUE ERP SYSTEM")
              }
              key={"DEVELOPMENT OF A UNIQUE ERP SYSTEM"}
            >
              <div className={style.svg}>
                <IconServer />
              </div>
              <p className={style.text}>DEVELOPMENT OF A UNIQUE ERP SYSTEM</p>
            </button>
          </li>
          <li
            className={`${style.item} ${
              activeMenuItem === "ONLINE-STORE DEVELOPMENT" ? style.active : ""
            }`}
          >
            <button
              className={style.btn}
              type="button"
              onClick={() => handleMenuChange("ONLINE-STORE DEVELOPMENT")}
              key={"ONLINE-STORE DEVELOPMENT"}
            >
              <div className={style.svg}>
                <IconAppstore />
              </div>

              <p className={style.text}>ONLINE-STORE DEVELOPMENT</p>
            </button>
          </li>
          <li
            className={`${style.item} ${
              activeMenuItem === "SUPPORT AND UPDATES" ? style.active : ""
            }`}
          >
            <button
              className={style.btn}
              type="button"
              onClick={() => handleMenuChange("SUPPORT AND UPDATES")}
              key={"SUPPORT AND UPDATES"}
            >
              <div className={style.svg}>
                <IconUpdate />
              </div>

              <p className={style.text}>SUPPORT AND UPDATES</p>
            </button>
          </li>
          <li
            className={`${style.item} ${
              activeMenuItem === "BOT DEVELOPMENT" ? style.active : ""
            }`}
          >
            <button
              className={style.btn}
              type="button"
              onClick={() => handleMenuChange("BOT DEVELOPMENT")}
              key={"BOT DEVELOPMENT"}
            >
              <div className={style.svg}>
                <IconRobot />
              </div>

              <p className={style.text}>BOT DEVELOPMENT</p>
            </button>
          </li>
          <li
            className={`${style.item} ${
              activeMenuItem === "WEBSITE TRANSFERRING" ? style.active : ""
            }`}
          >
            <button
              className={style.btn}
              type="button"
              onClick={() => handleMenuChange("WEBSITE TRANSFERRING")}
              key={"WEBSITE TRANSFERRING"}
            >
              <div className={style.svg}>
                <IconTransfer />
              </div>

              <p className={style.text}>WEBSITE TRANSFERRING</p>
            </button>
          </li>
        </ul>

        <div className={style.screen} style={{ opacity: `${opacity}` }}>
          <VisibilitySensor onChange={handleVisibilityChangeBot} partialVisibility>
            <div
              className={`${style.tumb} ${isVisibleBot ? style.visibleBlock : ""}`}
            >
              <h4 className={style.topic}>{itemToRender.title}</h4>
              <ul className={style.list}>
                <li className={style.tip}>{itemToRender.list[0]}</li>
                <li className={style.tip}>{itemToRender.list[1]}</li>
                <li className={style.tip}>{itemToRender.list[2]}</li>
              </ul>
              <p className={style.com}>{itemToRender.coment}</p>
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={handleVisibilityChangeBot} partialVisibility>
            <div
              className={`${style.tumb} ${isVisibleBot ? style.visibleBlock : ""}`}
            >
              <p className={style.article}>{itemToRender.article}</p>
              <button className={style.button} type="button">
                Contact
              </button>
            </div>
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
}
export default Servises;
