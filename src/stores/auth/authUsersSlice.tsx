import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, DecodedToken } from './authUsersTypes'; // Correctly import DecodedToken
import { oAuthLogin, checkAuthentication } from './authUsersThunks';

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
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
      localStorage.setItem('token', action.payload);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthentication.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkAuthentication.fulfilled, (state, action: PayloadAction<{ token: string; user: DecodedToken }>) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(checkAuthentication.rejected, (state, action) => {
        state.status = 'failed';
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        localStorage.removeItem('token');
        state.error = action.payload as string;
      })
      .addCase(oAuthLogin.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(oAuthLogin.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(oAuthLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setToken, logout } = authUsersSlice.actions;
export default authUsersSlice.reducer;
