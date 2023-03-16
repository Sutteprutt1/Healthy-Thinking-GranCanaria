import React, { useState } from "react";
import { NavWrapper, NavButton, DarkFilter } from "./styles";
import navbutton from "./navbutton.png";
import home from "./home-icon.png";
import profile from "./profile.png";
import selectedHome from "./selected-home-icon.png";
import selectedProfile from "./selected-profile.png";

// Navbar component that will display home, user profile and map

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const location = window.location.href.split("/")[3];

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <NavButton className={showMenu ? "open" : ""} onClick={handleMenuClick}>
        <img src={navbutton} alt="menu button" />
      </NavButton>
      {showMenu && (
        <>
          <NavWrapper>
            {location==="home" ? (
              <a href="/">
                <img src={selectedHome} alt="home icon" />
              </a>
            ) : (
              <a href="/">
                <img src={home} alt="home icon" />
              </a>
            )}
            {location==="profile" ? (
              <a href="/profile">
                <img src={selectedProfile} alt="profile icon" />
              </a>
            ) : (
              <a href="/profile">
                <img src={profile} alt="profile icon" />
              </a>
            )}
          </NavWrapper>
          <DarkFilter onClick={handleMenuClick}/>
        </>
      )}
    </>
  );
}
