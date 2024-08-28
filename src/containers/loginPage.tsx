import React from "react";
import Logo from "../components/logo"
import OAuthLogin from "../components/oAuthLogin"
import "../styles/loginPage.css"

const main:React.FC = () => {
  return (
    <div className="loginPageCss">
      <Logo />
      <OAuthLogin />
    </div>
  )
}

export default main;