import { configureStore } from '@reduxjs/toolkit';
import guideBooksReducer from './stores/guideBooks/guideBooksSlice';
import authReducer from './stores/auth/authUsersSlice';

const store = configureStore({
  reducer: {
    guideBooks: guideBooksReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export * from './stores/guideBooks';
export * from './stores/auth';
//export * from './stores/apexGuide'