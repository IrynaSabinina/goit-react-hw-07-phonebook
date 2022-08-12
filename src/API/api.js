import axios from 'axios';

const BASE_URL = 'https://62f5827fac59075124d26022.mockapi.io';
const mockApi = axios.create({ baseURL: BASE_URL });

export const fetchContacts = async () => {
  try {
    const { data } = await mockApi.get('/contacts');
    return data;
  } catch (error) {
    return alert(error.message);
  }
};

export const addContactFech = async contact => {
  try {
    const { data } = await mockApi.post('/contacts', { ...contact });
    return data;
  } catch (error) {
    return alert(error.message);
  }
};

export const deleteContactFech = async id => {
  try {
    const { data } = await mockApi.delete(`/contacts/:${id}`);
    return data;
  } catch (error) {
    return alert(error.message);
  }
};
