import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending]: handlePending,
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [authOperations.register.rejected]: handleRejected,

    [authOperations.login.pending]: handlePending,
    [authOperations.login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [authOperations.login.rejected]: handleRejected,

    [authOperations.logout.pending]: handlePending,
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [authOperations.logout.rejected]: handleRejected,

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
