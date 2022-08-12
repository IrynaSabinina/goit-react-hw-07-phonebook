import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './reducers';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: { contacts: rootReducer },
  devTools: process.env.NODE_ENV === 'development',
});
