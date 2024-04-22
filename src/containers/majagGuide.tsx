import React from "react";
import Logo from "../components/logo"
import "../styles/majagGuide.css"
import MajagGuideBody from "../components/majagGuideBody"

const majagGuide:React.FC = () => {
  return (
    <div className="majagGuideCss">
      <Logo />
      <MajagGuideBody />
    </div>
  )
}

export default majagGuide;