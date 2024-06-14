import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/main.css";
import majagpae34 from '../asset/majagpae34.png';
import apexIntro from '../asset/apexIntro.png';


interface GuideBookInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

const MainBody: React.FC = () => {
  const [guideBooks, setGuideBooks] = useState<GuideBookInfo[]>([]);

  useEffect(() =>{
    const fetchGuideBooks = async () => {
      try{
        const response = await fetch("http://localhost:8080/api/GBAllGuidebook");
        const data = await response.json();
        setGuideBooks(data);
      } catch(error) {
        console.log("데이터를 가져오지 못했습니다.",error);
      }
    };
    fetchGuideBooks();
  },[]);
  
  return (
    <div className="mainBodyCss">
      {guideBooks.map((guideBook) => (
        <div key={guideBook.GuideBookAllKey}>
          <div className='mainTitleCss'>{guideBook.GuideBookAllTitle}</div>
          <img 
              /* 이미지 지정 */
              src={
                guideBook.GuideBookAllTitle === 'Majak' 
                ? majagpae34
                :guideBook.GuideBookAllTitle === 'ApexLegend' 
                ? apexIntro
                :apexIntro }
              alt=''
              className="mainImageCss"
              style={{
                width: '300px', 
                height: '200px', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
                }}
            />
          <div className="mainGuideButtonWrapCss">
            {/* 페이지 링크 지정 */}
            <Link to={
              guideBook.GuideBookAllTitle === 'Majak' 
                ? '/majagGuide' 
                : guideBook.GuideBookAllTitle === 'ApexLegend' 
                ? '/ApexLegendGuide' 
                : '/page404'}> 
              <button className="mainImageButtonCss" style={{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color: "white" }}> {guideBook.GuideBookAllTitle} 가이드북 </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBody;
