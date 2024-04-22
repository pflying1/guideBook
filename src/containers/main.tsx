import React from "react";
/* import MainIntroduce from "../components/mainIntroduce" */
import Logo from "../components/logo"
import MainBody from "../components/mainBody"
/* import MainImage from "./mainImage" */
import "../styles/main.css"

const main:React.FC = () => {
  return (
    <div className="mainCss">
      <Logo />
      <MainBody />
    </div>
  )
}

export default main;