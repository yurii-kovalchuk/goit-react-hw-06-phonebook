import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items:
      JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number, id) {
        return {
          payload: { name, number, id },
        };
      },
    },
    deleteContact(state, action) {
      let newContacts = state.items.filter(
        contact => contact.id !== action.payload
      );
      return { items: newContacts };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const persistContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
