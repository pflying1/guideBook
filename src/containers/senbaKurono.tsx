import * as React from "react";
import Logo from "../components/logo"
import "../styles/senbaKurono.css"
import SenbaKuronoBody from "../components/senbaKuronoBody"

const senbaKurono:React.FC = () => {
  return (
    <div className="senbaKuronoCss">
      <Logo />
      <SenbaKuronoBody />
    </div>
  )
}

export default senbaKurono;



