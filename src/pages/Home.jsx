import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../scss/pages/home/_home.scss";
import partner1 from "../assets/photos/partner1.png";
import partner2 from "../assets/photos/partner2.png";
import partner3 from "../assets/photos/partner3.png";
import partner4 from "../assets/photos/partner4.png";
import partner5 from "../assets/photos/partner5.png";
import worldMap from "../assets/photos/worldmap.png";
import SocarLogo from "../assets/icons/socar_logo.png";
import PersonPhoto from "../assets/photos/testo_taylan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="home">
      <div className="top_page">
        <div className="top_page_elements">
          <div className="logo">
            <div className="img">
              <img src={SocarLogo} alt="socar_logo" />
            </div>
            <div className="buttons">
              <button className="heart btn">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#616d8a" }} />
              </button>
              <button className="link btn">
                <FontAwesomeIcon icon={faLink} style={{ color: "#616d8a" }} />
              </button>
            </div>
          </div>
          <div className="name">
            <h1>Neftqazelmitədqiqatlayihə İnstitutu</h1>
          </div>
          <div className="virtual_jour">
            <button className="btn">Virtual səyahət et</button>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="cards">
          <div className="card">
            <h3>Biz kimik?</h3>
            <p>
              "Neftqazelmitədqiqatlayihə" İnstitutu aşkar olunmuş strukturların
              və neft-qaz yataqlarının geoloji-geofiziki tədqiqatı,
              axtarış-kəşfiyyatı, işlənməsi, mənimsənilməsi və istismarı, eləcə
              də neftin-qazın emalı ilə əlaqədar müxtəlif növlü layihələndirmə
              işlərini həyata keçirir
            </p>
            <button className="btn">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#3674b5" }}
                />
              </div>
              Daha ətraflı
            </button>
          </div>
          <div className="card">
            <h3>Gördüyümüz işlər</h3>
            <p>
              "Neftqazelmitədqiqatlayihə" İnstitutu aşkar olunmuş strukturların
              və neft-qaz yataqlarının geoloji-geofiziki tədqiqatı,
              axtarış-kəşfiyyatı, işlənməsi, mənimsənilməsi və istismarı, eləcə
              də neftin-qazın emalı ilə əlaqədar müxtəlif növlü layihələndirmə
              işlərini həyata keçirir
            </p>
            <button className="btn">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#3674b5" }}
                />
              </div>
              Daha ətraflı
            </button>
          </div>
        </div>
      </div>
      <div className="partner">
        <div className="partners_top">
          <h1>TƏRƏFDAŞLARIMIZ</h1>
        </div>
        <div className="partners_bottom">
          <div className="img img2">
            <img src={partner2} alt="partner_2" />
          </div>
          <div className="img img3">
            <img src={partner3} alt="partner_3" />
          </div>
          <div className="img img1">
            <img src={partner1} alt="partner_4" />
          </div>
          <div className="img img4">
            <img src={partner4} alt="partner_5" />
          </div>
          <div className="img img5">
            <img src={partner5} alt="partner_6" />
          </div>
        </div>
      </div>
      <div className="statistics">
        <div className="statistic_top">
          <h1>STATISTIKA</h1>
        </div>
        <ScrollTrigger
          onEnter={() => {
            setCounterOn(true);
          }}
          onExit={() => {
            setCounterOn(false);
          }}
        >
          <div className="statistic_bottom">
            <div className="personals card">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={800} duration={2} delay={0} />
                )}
                +
              </h1>
              <p>İşçi personalı</p>
            </div>
            <div className="projects card">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h1>
              <p>Yerinə yetirilmiş layihə sayı</p>
            </div>
            <div className="partners card">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={10} duration={2} delay={0} />
                )}
                +
              </h1>
              <p>Beynəlxalq tərəfdaşlarımızın sayı</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <div className="map">
        <div className="map_img">
          <img src={worldMap} alt="world_map" />
          <div className="locations">
            <div className="location1 location">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#e1b12c" }}
              />
            </div>
            <div className="location2 location">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#e1b12c" }}
              />
            </div>
            <div className="location3 location">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#e1b12c" }}
              />
            </div>
            <div className="location4 location">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#e1b12c" }}
              />
            </div>
            <div className="location5 location">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#e1b12c" }}
              />
            </div>
            <div className="location6 location">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#e1b12c" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="feedbacks">
        <div className="feedback_top">
          <h1>Feedbacklar</h1>
        </div>
        <div className="feedback_bottom">
          <div className="cards">
            <div className="card">
              <div className="comment">
                <p>
                  Peşəkar mütəxəssislərin çalışdığı bu müəssisədə həm işin
                  keyfiyyəti, həm də vaxtında yerinə yetirilməsi yüksək
                  idarəçilikdən söhbət getdiyindən xəbər verir. Gələcəkdə
                  Neftqazelmitədqiqatlayihə İnstitutu ilə əməkdaşlıq edəcəyik.
                </p>
              </div>
              <div className="commentor">
                <div className="img">
                  <img src={PersonPhoto} alt="person_photo" />
                </div>
                <div className="name">
                  <p className="company_name">UBOC</p>
                  <p className="person_title">Vice president</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="comment">
                <p>
                  Peşəkar mütəxəssislərin çalışdığı bu müəssisədə həm işin
                  keyfiyyəti, həm də vaxtında yerinə yetirilməsi yüksək
                  idarəçilikdən söhbət getdiyindən xəbər verir. Gələcəkdə
                  Neftqazelmitədqiqatlayihə İnstitutu ilə əməkdaşlıq edəcəyik.
                </p>
              </div>
              <div className="commentor">
                <div className="img">
                  <img src={PersonPhoto} alt="person_photo" />
                </div>
                <div className="name">
                  <p className="company_name">UBOC</p>
                  <p className="person_title">Vice president</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="comment">
                <p>
                  Peşəkar mütəxəssislərin çalışdığı bu müəssisədə həm işin
                  keyfiyyəti, həm də vaxtında yerinə yetirilməsi yüksək
                  idarəçilikdən söhbət getdiyindən xəbər verir. Gələcəkdə
                  Neftqazelmitədqiqatlayihə İnstitutu ilə əməkdaşlıq edəcəyik.
                </p>
              </div>
              <div className="commentor">
                <div className="img">
                  <img src={PersonPhoto} alt="person_photo" />
                </div>
                <div className="name">
                  <p className="company_name">UBOC</p>
                  <p className="person_title">Vice president</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
