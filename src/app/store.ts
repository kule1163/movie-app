import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { moviesApi } from '../services/movies';
import moviesReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(moviesApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
