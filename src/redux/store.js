import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    contactList: contactsReducer,
    filter: filterReducer,
  },
});
