import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface GuideBookDataInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}
interface senbakuronoDataInfo {
  SenbakuroKey: number,
  GuideBookAllKey: number,
  SenbakuroTitle: string,
  SenbakuroContents: string,
  SenbakuroCategory: string,
  SenbakuroEpisode: string,
  updatedBy: string,
  createdAt: string,
  updatedAt: string
}
const majagGuideBody :React.FC = () => {

  const [guideBooksData, setGuideBooksData] = useState<GuideBookDataInfo[]>([]);
  const [senbakuronoData, setsenbakuronoData] = useState<senbakuronoDataInfo[]>([]);

  useEffect(() =>{
    const fetchGuideBooks = async () => {
      try{
        const response = await fetch("http://localhost:8080/GBAllGuidebook");
        const data = await response.json();
        setGuideBooksData(data);
        const response2 = await fetch("http://localhost:8080/GBSenbakuro");
        const data2 = await response2.json();
        setsenbakuronoData(data2); 
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
      <div>
        {guideBooksData.map((guideBook) =>(
            <Link to={`/senbakurono/chapter${guideBook.GuideBookAllKey}`}>
              <div>
                <button className="majagGuideImageButtonCss" style={{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color: "white" }}>{guideBook.GuideBookAllKey}장</button>
                {senbakuronoData.map((senbakurono) =>(
                  <div className="majagGuideSenbakuroTitleCss">{senbakurono.SenbakuroTitle}</div>
                ))}
              </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default majagGuideBody;