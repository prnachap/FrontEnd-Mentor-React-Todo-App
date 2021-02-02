import React from "react";
import "./header.scss";
import MoonIcon from "../../assets/icon-moon.svg";
import BackgroundDesktopLight from "../../assets/bg-desktop-light.jpg";
import BackgroundMobileLight from "../../assets/bg-mobile-light.jpg";
import BackgroundDesktopDark from "../../assets/bg-desktop-dark.jpg";
import BackgroundMobileDark from "../../assets/bg-mobile-dark.jpg";
import Form from "../form/Form";
import useWindowWidth from "../../hooks/useWindowWidth";
import Items from "../items/Items";

const Header = () => {
  const width = useWindowWidth();
  const imageUrl = width > 600 ? BackgroundDesktopLight : BackgroundMobileLight;

  return (
    <div
      className="header"
      style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
    >
      <div className="header__wrapper container">
        <h1 className="header__title">TODO</h1>
        <img src={MoonIcon} alt="" className="header__theme-icon" />
      </div>
      <Form />
      <Items />
    </div>
  );
};

export default Header;
