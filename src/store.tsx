import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface senbakuronoDataInfo {
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

interface GuideBookDataInfo {
  GuideBookAllKey: number;
  GuideBookAllTitle: string;
  GuideBookAllContents: string | null;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  senbakuronoes: senbakuronoDataInfo[];
}

interface GuideBooksState {
  data: GuideBookDataInfo[];
  error: string | null;
}

const initialState: GuideBooksState = {
  data: [],
  error: null,
};

const guideBooksSlice = createSlice({
  name: 'guideBooks',
  initialState,
  reducers: {
    setGuideBooksData(state, action: PayloadAction<GuideBookDataInfo[]>) {
      state.data = action.payload;
      state.error = null;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setGuideBooksData, fetchFailure } = guideBooksSlice.actions;

const store = configureStore({
  reducer: {
    guideBooks: guideBooksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
