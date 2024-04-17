import React from "react";
import { Link } from "react-router-dom"

const mainImage :React.FC = () => {
  return (
      <div className="mainBodyCss">
        <div className="mainImageCss">
          <Link to="/page404">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #E966A0", backgroundColor: "#E966A0", position: "absolute", marginLeft:"30%", marginTop:"1px"}}>마작 가이드북</button>
          </Link>

        </div>
      </div>
  )
}

export default mainImage;