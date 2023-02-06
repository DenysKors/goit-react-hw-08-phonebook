import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authorizationReducer } from './authorization/authorizationSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    authorization: authorizationReducer,
    filter: filterReducer,
  },
});
