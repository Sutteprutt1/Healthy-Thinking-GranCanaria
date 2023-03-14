import React, { useState } from "react";
import { NavWrapper, NavButton } from "./styles";
import navbutton from "./navbutton.png";
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
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/map">Map</a>
        </NavWrapper>
      )}
    </>
  );
}
