import React from "react";
import App from "../components/mainIntroduce"
import Logo from "../components/logo"
import MainImage from "../components/mainImage"
import "../styles/main.css"

const main:React.FC = () => {
  return (
    <div className="mainCss">
      <Logo />
      <App />
      <MainImage />
    </div>
  )
}

export default main;