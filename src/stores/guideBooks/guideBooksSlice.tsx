import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuideBooksState, GuideBookDataInfo } from './guideBooksTypes';
import { fetchGuideBooks, fetchMainGuideBooks } from './guideBooksThunks';

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
    setMainGuideBooks(state, action: PayloadAction<GuideBookDataInfo[]>) {
      state.data = action.payload;
      state.error = null;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuideBooks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchGuideBooks.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(fetchMainGuideBooks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchMainGuideBooks.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { setGuideBooksData, setMainGuideBooks, fetchFailure } = guideBooksSlice.actions;
export default guideBooksSlice.reducer;
