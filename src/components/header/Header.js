import React, { useState, useEffect } from "react";
import "./header.scss";
import MoonIcon from "../../assets/icon-moon.svg";
import SunIcon from "../../assets/icon-sun.svg";
import BackgroundDesktopLight from "../../assets/bg-desktop-light.jpg";
import BackgroundMobileLight from "../../assets/bg-mobile-light.jpg";
import BackgroundDesktopDark from "../../assets/bg-desktop-dark.jpg";
import BackgroundMobileDark from "../../assets/bg-mobile-dark.jpg";
import Form from "../form/Form";
import useWindowWidth from "../../hooks/useWindowWidth";
import Items from "../items/Items";

const Header = () => {
  const getStorageTheme = () => {
    let theme = "light";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };

  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = `${theme}-theme`;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const width = useWindowWidth();
  const selectBackgroundImage = () => {
    let imageUrl = null;
    if (width > 600 && theme === "light") {
      imageUrl = BackgroundDesktopLight;
    } else if (width < 600 && theme === "light") {
      imageUrl = BackgroundMobileLight;
    } else if (width > 600 && theme === "dark") {
      imageUrl = BackgroundDesktopDark;
    } else if (width < 600 && theme === "dark") {
      imageUrl = BackgroundMobileDark;
    }
    return imageUrl;
  };

  const imageUrl = selectBackgroundImage();

  const onClickHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className="header"
      style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
    >
      <div className="header__wrapper container">
        <h1 className="header__title">TODO</h1>
        <img
          src={theme === "light" ? SunIcon : MoonIcon}
          alt=""
          className="header__theme-icon"
          onClick={onClickHandler}
        />
      </div>
      <Form />
      <Items />
    </div>
  );
};

export default Header;
