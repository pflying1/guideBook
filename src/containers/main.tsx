import React from "react";
/* import MainIntroduce from "../components/mainIntroduce" */
import Logo from "../components/logo"
import MainBody from "../components/mainBody"
import LogoutButton from "../components/logoutButton";
/* import MainImage from "./mainImage" */
import "../styles/main.css"

const main:React.FC = () => {
  return (
    <div className="mainCss">
      {/* <LogoutButton /> */}
      <Logo />
      <MainBody />
    </div>
  )
}

export default main;