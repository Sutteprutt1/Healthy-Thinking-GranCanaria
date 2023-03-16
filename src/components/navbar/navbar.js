import React, { useState } from "react";
import { NavWrapper, NavButton, DarkFilter, SelectedTitle, NotSelectedTitle, LogOutTitle } from "./styles";
import navbutton from "./navbutton.png";
import home from "./home-icon.png";
import profile from "./profile.png";
import selectedHome from "./selected-home-icon.png";
import selectedProfile from "./selected-profile.png";
import logout from "./logout.png";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router";

// Navbar component that will display home, user profile and map

export default function Navbar() {
  let navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const location = window.location.href.split("/")[3];

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const logOut = () => {
    AuthService.logout();
    navigate("/");
  };

  return (
    <>
      <NavButton className={showMenu ? "open" : ""} onClick={handleMenuClick}>
        <img src={navbutton} alt="menu button" />
      </NavButton>
      {showMenu && (
        <>
          {location === "home" && (
            <>
              <NavWrapper>
                <a href="/home">
                  <img src={selectedHome} alt="home icon" />
                </a>
                <a href="/profile">
                  <img src={profile} alt="profile icon" />
                </a>
              <img src={logout} alt="profile icon" onClick={() => logOut()} />
              </NavWrapper>
              <DarkFilter onClick={handleMenuClick}>
                <SelectedTitle>Home</SelectedTitle>
                <NotSelectedTitle>Profile</NotSelectedTitle>
                <LogOutTitle>Log out</LogOutTitle>
              </DarkFilter>
            </>
          )}
          {location === "profile" && (
            <>
              <NavWrapper>
                <a href="/home">
                  <img src={home} alt="home icon" />
                </a>
                <a href="/profile">
                  <img src={selectedProfile} alt="profile icon" />
                </a>
                <img src={logout} alt="profile icon" onClick={() => logOut()}/>
              </NavWrapper>
              <DarkFilter onClick={handleMenuClick}>
                <NotSelectedTitle>Home</NotSelectedTitle>
                <SelectedTitle>Profile</SelectedTitle>
                <LogOutTitle>Log out</LogOutTitle>
              </DarkFilter>
            </>
          )}
        </>
      )}
    </>
  );
}
