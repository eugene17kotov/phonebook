import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers } from 'redux';

import { filterSlice } from 'redux/filterSlice';
import { itemsSlice } from 'redux/itemsSlice';
import { authReducer } from 'redux/auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: contactsReducer,
// });

// VANILLA REDUX

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
