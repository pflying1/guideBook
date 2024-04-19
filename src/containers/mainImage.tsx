import React from "react";
import { Link } from "react-router-dom"
import "../styles/main.css"

const mainImage :React.FC = () => {
  return (
      <div className="mainBodyCss">
        <div className="mainImageCss">
          <Link to="/majagGuide">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color:"white"}}>마작 가이드북 </button>
          </Link>
          <Link to="/page404">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color:"white"}}>apex 가이드북 </button>
          </Link>

        </div>
      </div>
  )
}

export default mainImage;