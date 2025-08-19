import { configureStore } from '@reduxjs/toolkit';
import { reducer as taskSliceReducer } from './updateTaskSlice';
import { reducer as secondSliceReducer } from './secondSlice';

export const store = configureStore({
  reducer: { taskSliceReducer, secondSliceReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: true,
      actionCreatorCheck: true,
    }),
});
