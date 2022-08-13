import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './initialState';

import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from '../redux/thunks/thunks';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContactsThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
    },

    [addContactThunk.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    [deleteContactThunk.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filter } = contactsSlice.actions;


// console.log(contactsSlice.actions);
// export default contactsSlice.reducer;
// console.log(contactsReducer);

// export const filterReducer = createReducer(contactsInitialState.filter, {
//   [filterContactsAction]: (_, action) => action.payload,
// });

// export const rootReducer = combineReducers({
//   items: contactsSlice.reducer,
//   filter: '',
// });
