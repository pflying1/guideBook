import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Senbakuro {
  SenbakuroKey: number;
  GuideBookAllKey: number;
  SenbakuroTitle: string;
  SenbakuroContents: string;
  SenbakuroCategory: string;
  SenbakuroEpisode: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

interface GuideBookDataInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  senbakuronoes: Senbakuro[];
}

const MajagGuideBody: React.FC = () => {
  const [guideBooksData, setGuideBooksData] = useState<GuideBookDataInfo[]>([]);

  useEffect(() => {
    const fetchGuideBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/GBAllGuideBook/with-senbakuro");
        const data = await response.json();
        setGuideBooksData(data);
      } catch (error) {
        console.log("데이터를 가져오지 못했습니다.", error);
      }
    };
    fetchGuideBooks();
  }, []);

  return (
    <div className="majagGuideBodyCss">
      <div>마작 기초 가이드</div>
      <div>센바 쿠로노 강좌 공부노트</div>
      <div>
        {guideBooksData.map((guideBook) => (
          <Link to={`/senbakurono/chapter${guideBook.GuideBookAllKey}`} key={guideBook.GuideBookAllKey}>
            <div>SenbakuroEpisode
              <button className="majagGuideImageButtonCss" style={{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color: "white" }} >
                {guideBook.GuideBookAllKey}장
              </button>
              {guideBook.senbakuronoes.map((senbakuro) => (
                <div className="majagGuideSenbakuroTitleCss" key={senbakuro.SenbakuroKey}>
                  {senbakuro.SenbakuroTitle}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MajagGuideBody;
