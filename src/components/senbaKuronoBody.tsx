import React from "react";
import { useParams } from "react-router-dom";

interface senbaKuronoBodyInfo {
  index: string;
  title: string;
  body: string;
}

const senbaKuronoBodyList: senbaKuronoBodyInfo[] = [
  {
    index: "chapter1",
    title: "1장",
    body: "chapter1 테스트",
  },
  {
    index: "chapter2",
    title: "2장",
    body: "chapter2 테스트",
  },
  {
    index: "chapter3",
    title: "3장",
    body: "chapter3 테스트",
  },
];

const SenbaKuronoBody: React.FC = () => {
  const { chapter } = useParams<'chapter'>();

  
  const chapterMatchCheck = senbaKuronoBodyList.find(item => item.index === chapter);

  return (
    <div className="senbaKuronoCss">
      {chapterMatchCheck ? (
        <div>
          <div className="senbaKuronoTitleCss">{chapterMatchCheck.title}</div>
          <div className="senbaKuronoBodyCss">{chapterMatchCheck.body}</div>
        </div>
      ) : (
        <div>해당 장의 내용을 찾을 수 없습니다.</div>
      )}
    </div>
  );
};

export default SenbaKuronoBody;