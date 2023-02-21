import { configureStore } from '@reduxjs/toolkit';
import { persistContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
