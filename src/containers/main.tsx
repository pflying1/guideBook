import React from "react";
import MainIntroduce from "../components/mainIntroduce"
import Logo from "../components/logo"
import MainBody from "../components/mainBody"
import MainImage from "../components/mainImage"
import "../styles/main.css"

const main:React.FC = () => {
  return (
    <div className="mainCss">
      <Logo />
      <MainIntroduce />
      <MainBody />
      <MainImage />
    </div>
  )
}

export default main;