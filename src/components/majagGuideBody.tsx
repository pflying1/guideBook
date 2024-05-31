import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface GuideBookInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}
const majagGuideBody :React.FC = () => {

  const [guideBooks, setGuideBooks] = useState<GuideBookInfo[]>([]);

  useEffect(() =>{
    const fetchGuideBooks = async () => {
      try{
        const response = await fetch("http://localhost:8080/GBAllGuidebook");
        const data = await response.json();
        setGuideBooks(data);
      } catch(error) {
        console.log("데이터를 가져오지 못했습니다.",error);
      }
    };
    fetchGuideBooks();
  },[]);

  return (
    <div className="majagGuideBodyCss">
      <div>마작 기초 가이드</div>
      <div>센바 쿠로노 강좌 공부노트</div>
      {guideBooks.map((guideBook) =>(
          <Link to={`/senbakurono/chapter${guideBook.GuideBookAllKey}`}>
            <button className="mainImageButtonCss" style={{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color: "white" }}>{guideBook.GuideBookAllKey}장</button>
          </Link>
      ))}
    </div>
  )
}

export default majagGuideBody;