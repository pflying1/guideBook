import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, DecodedToken } from './authUsersTypes';
import { oAuthLogin } from './authUsersThunks';
import { jwtDecode } from 'jwt-decode';

export const checkAuthentication = createAsyncThunk(
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
        console.log('Token is valid, decoded:', decoded);
        return { token, user: decoded };
      } catch (error) {
        console.error('Error during token validation:', error);
        return rejectWithValue('Invalid or expired token');
      }
    } else {
      console.warn('No token found');
      return rejectWithValue('No token found');
    }
  }
);

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
    logout: (state) => {
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
        console.log('checkAuthentication pending');
      })
      .addCase(checkAuthentication.fulfilled, (state, action: PayloadAction<{ token: string, user: DecodedToken }>) => {
        console.log('checkAuthentication fulfilled with:', action.payload);
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(checkAuthentication.rejected, (state, action) => {
        console.error('checkAuthentication rejected with:', action.payload);
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
