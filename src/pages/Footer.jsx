import React from "react";
import "../scss/layout/footer/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_elements">
        <div className="insitute element">
          <ul>
            <li>
              <h4> Neftqazelmitədqiqatlayihə institutu</h4>
            </li>
            <li>
              <p>
                Neft qaz sənayəsindən layihələndirmə, tikinti və elmi
                tədqiqatların aparıldığı qurumdur
              </p>
            </li>
          </ul>
        </div>
        <div className="about_site element">
          <ul>
            <li>
              <h4>Haqqımızda</h4>
            </li>
            <li>
              <p>Xidmətlərimiz</p>
            </li>
            <li>
              <p>Faydalı keçidlər</p>
            </li>
            <li>
              <p>Əlaqə</p>
            </li>
          </ul>
        </div>
        <div className="services element">
          <ul>
            <li>
              <h4>Xidmətlərimiz</h4>
            </li>
            <li>
              <p>Layihələndirmə</p>
            </li>
            <li>
              <p>Tikintinin təşkili</p>
            </li>
            <li>
              <p>Elmi tədqiqatların aparılması</p>
            </li>
          </ul>
        </div>
        <div className="adresses element">
          <ul>
            <li>
              <h4> Həsənbəy Zərdabi 88a, Bakı, Azərbaycan, AZ1122</h4>
            </li>
            <li>
              <p>info@nqteli.com</p>
            </li>
            <li>
              <p>+994 123 45 56</p>
            </li>
            <li className="social_medias">
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#ffffff" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#ffffff" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff" }}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyrights">
        <hr />
        <p>
          © 2025 Neftqazelmitədqiqatlayihə İnstitutu. Bütün hüquqları qorunur
        </p>
      </div>
    </div>
  );
};

export default Footer;
