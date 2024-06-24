import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface SenbakuronoDataInfo {
  SenbakuroKey: number;
  GuideBookAllKey: number;
  SenbakuroTitle: string;
  SenbakuroContents: string;
  SenbakuroContentsOrder: string;
  SenbakuroCategory: string;
  SenbakuroEpisode: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

const SenbaKuronoBody: React.FC = () => {
  const [SenbakuronoData, setSenbakuronoData] = useState<SenbakuronoDataInfo[]>([]);
  const { chapter } = useParams<'chapter'>();

  useEffect(() => {
    const fetchSenbakurono = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/GBSenbakuro");
        const data = await response.json();
        setSenbakuronoData(data);
      } catch (error) {
        console.log("데이터를 가져오지 못했습니다.", error);
      }
    };
    fetchSenbakurono();
  }, []);
    //url 에서 #부분 추출
    const hash = window.location.hash;
    const hashNumber = hash ? hash.replace('#', '') : undefined
    //url의 chapter 매개변수에서 '#'를 제거한 값을 추출
    const chapterNumber = chapter ? chapter.replace('chapter', '') : undefined;
    // chapterNumber와 hashNumber를 사용하여 해당 항목을 찾음
    const chapterMatchCheck = SenbakuronoData.find(item => item.GuideBookAllKey === Number(chapterNumber) && item.SenbakuroContentsOrder === hashNumber);
    
    return (
      <div className="senbaKuronoCss">
        {chapterMatchCheck ? (
          <div className="senbakuronoWrapCss">
            <div className="senbaKuronoTitleCss">{chapterMatchCheck.SenbakuroTitle}</div>
            <div className="senbaKuronoBodyCss" dangerouslySetInnerHTML={{ __html: chapterMatchCheck.SenbakuroContents }} />
          </div>
        ) : (
          <div>해당 장의 내용을 찾을 수 없습니다.</div>
        )}
      </div>
    );
};

export default SenbaKuronoBody;