import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContactFech, deleteContactFech } from 'API/api';


export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const { data } = await fetchContacts();
    return data;
  }
  );
  export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async contact => {
      const { data } = await addContactFech(contact);
      return data;
    }
    );
    
    export const deleteContactThunk = createAsyncThunk(
      'contacts/deleteContact',
      async id => {
        await deleteContactFech(id);
        
        return id;
      }
      );
      
      // export const getContactsThunk = () => async dispatch => {
      //   dispatch({ type: 'getContactsLoading' });
      //   try {
      //     const contacts = await fetchContacts();
      //     dispatch({ type: 'getContactsSuccess', payload: contacts });
      //   } catch (error) {
      //     dispatch({ type: 'getContactsError' });
      //   }
      // };