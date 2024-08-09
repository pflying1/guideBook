import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setGuideBooksData, fetchFailure } from '../store';

const MajagGuideBody: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data = [], error } = useSelector((state: RootState) => state.guideBooks);

  useEffect(() => {
    const fetchGuideBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/GBAllGuideBook/with-senbakuro');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(setGuideBooksData(data));
      } catch (error) {
        console.error('데이터를 가져오지 못했습니다.', error);
        dispatch(fetchFailure('데이터를 가져오지 못했습니다.'));
      }
    };
    fetchGuideBooks();
  }, [dispatch]);

  return (
    <div className="majagGuideBodyCss">
      <div style={{ fontSize: '60px' }}>마작 기초 가이드</div>
      <div style={{ fontSize: '60px' }}>센바 쿠로노 강좌 공부노트</div>
      <div className="majagGuideWrapCss">
        { data.length > 0 ? (
            data.map((guideBook) => (
              <div key={guideBook.GuideBookAllKey} className="majagGuideContentWrapCss">
                <button
                  className="majagGuideImageButtonCss"
                  style={{ border: '1px solid #457b9d', backgroundColor: '#457b9d', color: 'white' }}
                >
                  {guideBook.GuideBookAllKey}장
                </button>
                {guideBook.senbakuronoes && guideBook.senbakuronoes.length > 0 ? (
                guideBook.senbakuronoes.map((senbakuro) => (
                  <Link
                    to={`/senbakurono/chapter${guideBook.GuideBookAllKey}/#1`}
                    key={senbakuro.SenbakuroKey}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <div className="majagGuideSenbakuroTitleCss">
                      {senbakuro.SenbakuroTitle}
                    </div>
                  </Link>
                ))
              ) : (
                <div></div>
              )}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default MajagGuideBody;