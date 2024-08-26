import React from "react";
import Logo from "../components/logo"
import OAuthLogin from "../components/oAuthLogin"
//import "../styles/LoginPage.css"

const main:React.FC = () => {
  return (
    //<div className="LoginPageCss">
    <div>
      <Logo />
      <OAuthLogin />
    </div>
  )
}

export default main;