import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, DecodedToken } from './authUsersTypes'; 
import { oAuthLogin } from './authUsersThunks';
import { jwtDecode } from 'jwt-decode';

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  status: 'idle',
  error: null,
  isAuthenticated: false,
  user: null,
};

const authUsersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token', action.payload);
    },
    setAuthStatus(state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) {
      state.status = action.payload;
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token); // 로그인 성공 시 토큰을 로컬 스토리지에 저장합니다.
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem('token'); // 로그아웃 시 토큰을 로컬 스토리지에서 제거합니다.
    },
    checkAuthentication: (state) => {
      const token = state.token;
      if (token) {
        try {
          const decoded = jwtDecode<DecodedToken>(token as string);
          const { exp } = decoded;
          state.isAuthenticated = true;
        } catch (e) {
          state.isAuthenticated = false;
          state.token = null;
          localStorage.removeItem('token');
        }
      } else {
        state.isAuthenticated = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(oAuthLogin.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(oAuthLogin.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(oAuthLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setToken, setAuthStatus, setAuthError, loginSuccess, logout, checkAuthentication } = authUsersSlice.actions;
export default authUsersSlice.reducer;