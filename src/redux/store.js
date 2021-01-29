import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer, filterReducer, loadingReducer, errorReducer } from './reducers';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
    isLoading: loadingReducer,
    error: errorReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
