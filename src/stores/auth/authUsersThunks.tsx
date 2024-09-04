import { createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode'; // jwt-decode 라이브러리
import { DecodedToken } from './authUsersTypes';

export const checkAuthentication = createAsyncThunk<
  { token: string; user: DecodedToken },
  void,
  { rejectValue: string }
>(
  'auth/checkAuthentication',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        const { exp } = decoded;
        if (exp < Date.now() / 1000) {
          throw new Error('Token expired');
        }
        return { token, user: decoded };
      } catch (error) {
        return rejectWithValue('Invalid or expired token');
      }
    } else {
      return rejectWithValue('No token found');
    }
  }
);

export const oAuthLogin = createAsyncThunk<string, string, { rejectValue: string }>(
  'auth/oAuthLogin',
  async (token, { rejectWithValue }) => {
    try {
      // 서버에 토큰을 보내어 인증
      // 여기서는 단순히 토큰을 반환한다고 가정
      return token;
    } catch (error) {
      return rejectWithValue('OAuth login failed');
    }
  }
);
