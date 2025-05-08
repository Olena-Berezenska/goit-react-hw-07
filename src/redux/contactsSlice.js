import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialContacts from '../assets/initialContacts.json';
import { deleteContact, addContact, fetchContacts } from './contactsOps';

export const selectContacts = state => state.contactList.contacts.items;
export const selectLoading = state => state.contactList.contacts.loading;
export const selectError = state => state.contactList.contacts.error;

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};
const slice = createSlice({
  name: 'contactList',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload
        );
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        (state, action) => {
          state.contacts.error = null;
          state.contacts.loading = true;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
// export const { addContact, deleteContact, fetchContacts } = slice.actions;
