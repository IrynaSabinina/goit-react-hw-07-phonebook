import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addAction = createAction('add', (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));

export const deleteAction = createAction('delete');
export const filterAction = createAction('filter');
