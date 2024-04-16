import React from "react";
import Logo from "../components/logo"
import "../styles/page404.css"
import Page404Body from "../components/page404Body"

const page404:React.FC = () => {
  return (
    <div className="page404Css">
      <Logo />
      <Page404Body />
    </div>
  )
}

export default page404;