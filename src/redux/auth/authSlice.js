import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [authOperations.register.pending](state, { payload }) {},
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // [authOperations.register.rejected](state, { payload }) {},
    // [authOperations.login.pending](state, { payload }) {},
    [authOperations.login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // [authOperations.login.rejected](state, { payload }) {},
    // [authOperations.logout.pending](state, { payload }) {},
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [authOperations.logout.rejected](state, { payload }) {},
    [authOperations.refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
