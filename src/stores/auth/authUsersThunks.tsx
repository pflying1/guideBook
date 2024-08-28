import { createAsyncThunk } from '@reduxjs/toolkit';

export const oAuthLogin = createAsyncThunk<
string,  // 성공 시 반환할 데이터의 타입
string,  // Thunk가 받을 매개변수의 타입
{ rejectValue: string }  // Thunk가 거부할 때 반환할 데이터의 타입
>(
  'auth/oauthLogin',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 응답에서 토큰을 추출합니다.
      const data = await response.json();
      return data.token; // 서버가 반환하는 토큰

    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message || '로그인 실패');
      } else {
        return rejectWithValue('로그인 실패');
      }
    }
  }
);