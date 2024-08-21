import { configureStore } from '@reduxjs/toolkit';
import guideBooksReducer from './stores/guideBooks/guideBooksSlice';

const store = configureStore({
  reducer: {
    guideBooks: guideBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export * from './stores/guideBooks';
//export * from './stores/apexGuide'