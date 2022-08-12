import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import { filterContactsAction } from './actions';
import { contactsInitialState } from './initialState';
// import { STATUS } from 'constanse/status';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from '../redux/thunks/thunks';

// console.log(contactsInitialState.items);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState.items,
  extraReducers: {
    [getContactsThunk.fulfilled]: (_, action) => action.payload,
    [addContactThunk.fulfilled]: (state, action) => [...state, action.payload],
    [deleteContactThunk.fulfilled]: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

// export const contactsReducer = contactsSlice.reducer;
// export default contactsSlice.reducer;
// console.log(contactsReducer);

export const filterReducer = createReducer(contactsInitialState.filter, {
  [filterContactsAction]: (_, action) => action.payload,
});

export const rootReducer = combineReducers({
  items: contactsSlice.reducer,
  filter: filterReducer,
});
