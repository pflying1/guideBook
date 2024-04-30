import React from 'react';
import { Link } from "react-router-dom";
import "../styles/main.css";

// Importing images
import majagpae34 from '../asset/majagpae34.png';
import apexIntro from '../asset/apexIntro.png';
// Assuming you have 'c.png' in the asset folder;

interface GuideBookInfo {
  title: string;
  imageUrl: string;
  guideLink: string;
}

const guideBookList: GuideBookInfo[] = [
  {
    title: '마작',
    imageUrl: majagpae34, // Use imported image here
    guideLink: '/majagGuide'
  },
  {
    title: 'apex',
    imageUrl: apexIntro, // Use imported image here
    guideLink: '/page404'
  },
  {
    title: '000',
    imageUrl: apexIntro, // Use imported image here
    guideLink: '/page404'
  }
];

const MainBody: React.FC = () => {
  return (
    <div className="mainBodyCss">
      {guideBookList.map((guideBook, index) => (
        <div key={index}>
          <div className='mainTitleCss'>{guideBook.title}</div>
          <img 
              src={guideBook.imageUrl}
              alt=''
              className="mainImageCss"
              style={{
                width: '300px', // 이미지 너비 설정
                height: '200px', // 이미지 높이 설정
                backgroundSize: 'cover', // 이미지를 컨테이너에 맞게 늘림
                backgroundPosition: 'center', // 이미지를 가운데 정렬
                backgroundRepeat: 'no-repeat' // 이미지 반복 없음  */
                }}
            />
          <div className="mainGuideButtonWrapCss">
            <Link to={guideBook.guideLink}>
              <button className="mainImageButtonCss" style={{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color: "white" }}> {guideBook.title} 가이드북 </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBody;
