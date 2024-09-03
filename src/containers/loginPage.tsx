import React from "react";
import Logo from "../components/logo"
import OAuthLogin from "../components/oAuthLogin"
import "../styles/loginPage.css"
import LogoutButton from "../components/logoutButton";

const main:React.FC = () => {
  return (
    <div className="loginPageCss">
      <Logo />
      <OAuthLogin />
      {/* <LogoutButton /> */}
    </div>
  )
}

export default main;