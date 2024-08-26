import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './authUsersTypes';
import { oAuthLogin } from './authUsersThunks';

const initialState: AuthState = {
  token: null,
  status: 'idle',
  error: null,
};

const authUsersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.error = null;
    },
    setAuthStatus(state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) {
      state.status = action.payload;
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
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

export const { setToken, setAuthStatus, setAuthError } = authUsersSlice.actions;
export default authUsersSlice.reducer;