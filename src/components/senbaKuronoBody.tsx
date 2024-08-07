import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setGuideBooksData, fetchFailure } from '../store';

const SenbaKuronoBody: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error } = useSelector((state: RootState) => state.guideBooks);
  const { chapter } = useParams<{ chapter: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGuideBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/GBAllGuideBook/with-senbakuro');
        const data = await response.json();
        dispatch(setGuideBooksData(data));
      } catch (error) {
        dispatch(fetchFailure('데이터를 가져오지 못했습니다.'));
      }
    };
    fetchGuideBooks();
  }, [dispatch]);

  const hash = window.location.hash;
  const hashNumber = hash ? hash.replace('#', '') : undefined;
  const chapterNumber = chapter ? chapter.replace('chapter', '') : undefined;
  const validData = data.flatMap(gb => gb.senbakuronoes).filter(item => item.SenbakuroKey && item.SenbakuroContentsOrder);
  const chapterMatchCheck = validData.find(item => item.GuideBookAllKey === Number(chapterNumber) && item.SenbakuroContentsOrder === String(hashNumber));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (chapterNumber && hashNumber) {
        const currentChapter = Number(chapterNumber);
        const currentHash = Number(hashNumber);

        if (event.key === 'ArrowRight') {
          const nextHash = currentHash + 1;
          const nextChapterMatchCheck = validData.find(item => item.GuideBookAllKey === currentChapter && item.SenbakuroContentsOrder === String(nextHash));
          if (nextChapterMatchCheck) {
            navigate(`/senbakurono/chapter${currentChapter}/#${nextHash}`);
          }
        } else if (event.key === 'ArrowLeft') {
          if (currentHash > 1) {
            const prevHash = currentHash - 1;
            const prevChapterMatchCheck = validData.find(item => item.GuideBookAllKey === currentChapter && item.SenbakuroContentsOrder === String(prevHash));
            if (prevChapterMatchCheck) {
              navigate(`/senbakurono/chapter${currentChapter}/#${prevHash}`);
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [chapterNumber, hashNumber, navigate, validData]);

  return (
    <div className="senbaKuronoCss">
      {chapterMatchCheck ? (
        <div className="senbakuronoWrapCss">
          {chapterMatchCheck.SenbakuroContentsOrder === '1' ? (
            <div className="senbaKuronoTitleCss">
              {chapterMatchCheck.SenbakuroTitle}
              <br />
              <div className="senbakuronoPressKeyCss">-{'>'} 키를 누르면 다음 페이지로 이동</div>
              <br />
            </div>
          ) : (
            <div>
              <div className="senbaKuronoBodyCss" dangerouslySetInnerHTML={{ __html: chapterMatchCheck.SenbakuroContents }}></div>
            </div>
          )}
        </div>
      ) : (
        <div>해당 장의 내용을 찾을 수 없습니다.</div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SenbaKuronoBody;