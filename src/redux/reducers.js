import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import { addAction, deleteAction, filterAction } from './actions';
import { contactsInitialState } from './initialState';
import { STATUS } from 'constanse/status';
import { getContactsThunk } from '../redux/thunks/thunks';

// console.log(initialState);
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [getContactsThunk.pending]: state => (state.status = STATUS.Loading),
    [getContactsThunk.fulfilled]: (state, actions) => {
      state.status = STATUS.Success;
      state.contacts.items = actions.payload;
    },
    [getContactsThunk.rejected]: state => (state.status = STATUS.Error),
  },
});

export const contactsReducer = contactsSlice.reducer;
// console.log(contactsReducer);

// export const filterReducer = createReducer((contactsInitialState.filter = ''), {
//   [filterAction]: (_, action) => action.payload,
// });

// export const rootReducer = combineReducers({
//   items: contactsReducer,
//   filter: filterReducer,
// });
