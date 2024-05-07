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
    body: "test1",
  },
  {
    index: "chapter2",
    title: "2장",
    body: "test2",
  },
  {
    index: "chapter3",
    title: "3장",
    body: "test3",
  },
];

const SenbaKuronoBody: React.FC = () => {
  const { chapter } = useParams<'chapter'>();

  // 'index' 필드와 'chapter' 파라미터 값 비교
  const currentChapterContent = senbaKuronoBodyList.find(item => item.index === chapter);

  return (
    <div className="senbaKuronoCss">
      {currentChapterContent ? (
        <div>
          <div>{currentChapterContent.title}</div>
          <div>{currentChapterContent.body}</div>
        </div>
      ) : (
        <div>해당 장의 내용을 찾을 수 없습니다.</div>
      )}
    </div>
  );
};

export default SenbaKuronoBody;