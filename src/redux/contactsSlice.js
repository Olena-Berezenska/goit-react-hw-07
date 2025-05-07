import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../assets/initialContacts.json';
const initialState = {
  contacts: initialContacts,
};
const slice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
