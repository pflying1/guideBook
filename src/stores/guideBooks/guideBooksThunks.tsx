import { createAsyncThunk } from '@reduxjs/toolkit';
import { GuideBookDataInfo } from './guideBooksTypes';

export const fetchGuideBooks = createAsyncThunk(
  'guideBooks/fetchGuideBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8080/api/GBAllGuideBook/with-senbakuro');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: GuideBookDataInfo[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('데이터를 가져오지 못했습니다.');
    }
  }
);

export const fetchMainGuideBooks = createAsyncThunk(
  'guideBooks/fetchMainGuideBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8080/api/GBAllGuidebook');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: GuideBookDataInfo[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('데이터를 가져오지 못했습니다.');
    }
  }
);
