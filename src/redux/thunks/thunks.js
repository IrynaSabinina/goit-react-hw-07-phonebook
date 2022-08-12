// import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'API/api';

// export const getContactsThunk = () => async dispatch => {
//   dispatch({ type: 'getContactsLoading' });
//   try {
//     const contacts = await fetchContacts();
//     dispatch({ type: 'getContactsSuccess', payload: contacts });
//   } catch (error) {
//     dispatch({ type: 'getContactsError' });
//   }
// };

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await fetchContacts();
  }
);
