import React from "react";
import SocarLogo from "../assets/icons/nqteli_icon.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../scss/layout/navbar/_navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_top">
        <div className="navbar_top_left">
          <div className="navbarLogo">
            <Link to={"/"}>
              <div className="icon">
                <div className="img">
                  <img src={SocarLogo} alt="adopt-me-logo" />
                </div>
                <p>Neftqazelmitədqiqatlayihəİnsitutu</p>
              </div>
            </Link>
          </div>
          <div className="language_changing">
            <div className="languages">
              <button className="btn">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#3674b5" }} />
              </button>
              <button className="btn">AZ</button>
              <button className="btn">EN</button>
              <button className="btn">RU</button>
            </div>
          </div>
        </div>
        <div className="navbar_top_right">
          <div className="text_sizing">
            <div className="buttons">
              <div className="button_icrease btn">A+</div>
              <div className="button_decrease btn">A-</div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_middle">
        <Link to={"/about"}>Haqqımızda</Link>
        <Link to={"/services"}>Xidmətlər</Link>
        <Link to={"/projects"}>Layihələr</Link>
        <Link to={"/customers"}>Müştərilər</Link>
        <Link to={"/partners"}>Partnyorlar</Link>
        <Link to={"/news"}>Xəbərlər</Link>
        <Link to={"/contact"}>Əlaqə</Link>
        <Link to={"/querry"} className="querry">
          SORĞU GÖNDƏR
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
