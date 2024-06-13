import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface SenbakuronoDataInfo {
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

const SenbaKuronoBody: React.FC = () => {
  const [SenbakuronoData, setSenbakuronoData] = useState<SenbakuronoDataInfo[]>([]);
  const { chapter } = useParams<'chapter'>();

  useEffect(() => {
    const fetchSenbakurono = async () => {
      try {
        const response = await fetch("http://localhost:8080/GBSenbakuro");
        const data = await response.json();
        setSenbakuronoData(data);
      } catch (error) {
        console.log("데이터를 가져오지 못했습니다.", error);
      }
    };
    fetchSenbakurono();
  }, []);

    //const chapterMatchCheck = SenbakuronoData.find(item => item.index === chapter);
    const chapterNumber = chapter ? Number(chapter.replace('chapter', '')) : undefined;
    const chapterMatchCheck = SenbakuronoData.find(item => item.SenbakuroKey === chapterNumber);
    
    return (
      <div className="senbaKuronoCss">
        {chapterMatchCheck ? (
          <div>
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