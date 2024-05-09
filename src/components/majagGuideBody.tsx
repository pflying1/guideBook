import React from "react";
import { Link } from "react-router-dom";

interface majagGuideBodyInfo {
  title: string;
  majagGuideLink: string;
}

const majagGuideBodyList: majagGuideBodyInfo[] = [
  {
    title: "1장",
    majagGuideLink:"/senbakurono/chapter1"
  },
  {
    title: "2장",
    majagGuideLink:"/senbakurono/chapter2"
  },
  {
    title: "3장",
    majagGuideLink:"/senbakurono/chapter3"
  },
]

const majagGuideBody :React.FC = () => {
  return (
    <div className="majagGuideBodyCss">
      <div>마작 기초 가이드</div>
      <div>센바 쿠로노 강좌 공부노트</div>
      {majagGuideBodyList.map((majagGuide, index) =>(
        <div key= {index}>
          <Link to={majagGuide.majagGuideLink}>
            <button className="mainImageButtonCss" style={{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color: "white" }}>{majagGuide.title}</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default majagGuideBody;