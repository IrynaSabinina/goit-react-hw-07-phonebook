import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { fetchContacts, addContactFech, deleteContactFech } from '../API/api';

export const getContactsAction = createAsyncThunk('contacts/get', async () => {
  return await fetchContacts();
});

export const addContactAction = createAsyncThunk(
  'contact/add',
  async contact => {
    await addContactFech(contact);
    return await fetchContacts();
  }
);

export const deleteContactAction = createAsyncThunk(
  'contact/delete',
  async id => {
    await deleteContactFech(id);
    return await fetchContacts();
  }
);

export const filterContactsAction = createAction('contacts/filter');
