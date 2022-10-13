import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/logout', credentials);
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const persistedToken = thunkAPI.getState().auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Valid token not found');
  }

  try {
    token.set(persistedToken);
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

const authOperations = {
  register,
  login,
  logout,
  refreshUser,
};

export default authOperations;
