import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/main.css";
import majagpae34 from '../asset/majagpae34.png';
import apexIntro from '../asset/apexIntro.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch, fetchMainGuideBooks } from '../store';

const MainBody: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error } = useSelector((state: RootState) => state.guideBooks);

  useEffect(() => {
    dispatch(fetchMainGuideBooks());
  }, [dispatch]);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="mainBodyCss">
      {data.map((guideBook) => (
        <div key={guideBook.GuideBookAllKey}>
          <div className='mainTitleCss'>{guideBook.GuideBookAllTitle}</div>
          <img 
              /* 이미지 지정 */
              src={
                guideBook.GuideBookAllTitle === 'Majak' 
                ? majagpae34
                : guideBook.GuideBookAllTitle === 'ApexLegend' 
                ? apexIntro
                : apexIntro }
              alt={guideBook.GuideBookAllTitle}
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
              <button className="mainImageButtonCss" style={{ border: "1px solid #457b9d", backgroundColor: "#457b9d", color: "white" }}> 
                {guideBook.GuideBookAllTitle} 가이드북 
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBody;
