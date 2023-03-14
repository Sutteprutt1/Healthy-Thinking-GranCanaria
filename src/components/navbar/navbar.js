import React, { useState } from "react";
import { NavWrapper, NavButton } from "./styles";
import navbutton from "./navbutton.png";
import home from "./home-icon.png";
import profile from "./profile.png";

// Navbar component that will display home, user profile and map

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <NavButton className={showMenu ? "open" : ""} onClick={handleMenuClick}>
        <img src={navbutton} alt="menu button" />
      </NavButton>
      {showMenu && (
        <NavWrapper>
          <a href="/">
            <img src={home} alt="home icon" />
          </a>
          <a href="/profile">
            <img src={profile} alt="profile icon" />
          </a>
        </NavWrapper>
      )}
    </>
  );
}
