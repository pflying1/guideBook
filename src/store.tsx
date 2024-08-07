import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// GuideBook 데이터 항목의 타입 정의
interface GuideBookInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

// Senbakurono 데이터 항목의 타입 정의
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

// GuideBook 데이터 항목에 Senbakurono 포함하는 타입 정의
interface GuideBookDataInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  senbakuronoes: SenbakuronoDataInfo[];
}

// Redux 스토어의 초기 상태 타입 정의
interface GuideBooksState {
  data: GuideBookDataInfo[];
  error: string | null;
}

// 초기 상태 값 설정
const initialState: GuideBooksState = {
  data: [],
  error: null,
};

// Redux 슬라이스 정의
const guideBooksSlice = createSlice({
  name: 'guideBooks',
  initialState, // 초기 상태
  reducers: {
    // 단일 GuideBook 정보 업데이트를 처리하는 액션
    setGuideBookInfo(state, action: PayloadAction<GuideBookDataInfo[]>) {
      state.data = action.payload;
      state.error = null;
    },
    // GuideBook 데이터를 설정하는 액션
    setGuideBooksData(state, action: PayloadAction<GuideBookDataInfo[]>) {
      state.data = action.payload;
      state.error = null;
    },
    // 데이터 가져오는데 실패한 경우
    fetchFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setGuideBookInfo, setGuideBooksData, fetchFailure } = guideBooksSlice.actions;

// Redux 스토어 설정
const store = configureStore({
  reducer: {
    guideBooks: guideBooksSlice.reducer,
  },
});

// 루트 상태 및 디스패치 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;