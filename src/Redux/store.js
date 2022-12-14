import { configureStore} from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/slice';
import { filterReducer } from './Filter/slice';
import { persistStore, persistReducer, FLUSH,REHYDRATE,PAUSE, PERSIST, PURGE,REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { authReducer } from './Auth/auth-slice';


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

