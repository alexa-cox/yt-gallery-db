import { configureStore } from '@reduxjs/toolkit';
import { videosReducer } from './slices';
import { uiReducer } from './slices';
import { playerReducer } from './slices';

const Store = configureStore({
  reducer: {
    videos: videosReducer,
    ui: uiReducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default Store;
