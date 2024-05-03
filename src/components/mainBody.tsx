import React from 'react';
import { Link } from "react-router-dom";
import "../styles/main.css";
import majagpae34 from '../asset/majagpae34.png';
import apexIntro from '../asset/apexIntro.png';


interface GuideBookInfo {
  title: string;
  imageUrl: string;
  guideLink: string;
}

const guideBookList: GuideBookInfo[] = [
  {
    title: '마작',
    imageUrl: majagpae34, 
    guideLink: '/majagGuide'
  },
  {
    title: 'apex',
    imageUrl: apexIntro, 
    guideLink: '/page404'
  },
  {
    title: '000',
    imageUrl: apexIntro, 
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
                width: '300px', 
                height: '200px', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
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
