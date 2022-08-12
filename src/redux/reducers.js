import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addAction, deleteAction, filterAction } from './actions';
import { initialState } from './initialState';

// console.log(initialState);

export const contactsReducer = createReducer(initialState.items, {
  [addAction]: (state, action) => [...state, action.payload],
  [deleteAction]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});
// console.log(contactsReducer);

export const filterReducer = createReducer((initialState.filter = ''), {
  [filterAction]: (_, action) => action.payload,
});

export const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
