import { createAsyncThunk } from '@reduxjs/toolkit';
import localStorage from 'redux-persist/es/storage';
import {
  getAuthRequest,
  logOutRequest,
  signInRequest,
  signUpRequest,
} from 'Services/api';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (formData, thunkApi) => {
   
    try {
      const userData = await signUpRequest(formData);
      userData?.token && localStorage.setItem('token', userData.token);
      console.log(userData);
      return userData;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (formData, thunkApi) => {
    try {
      const userData = await signInRequest(formData);
      userData?.token && localStorage.setItem('token', userData.token);
      return userData;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getAuth = createAsyncThunk('user/getAuth', async (_, thunkApi) => {
  try {
    const userData = await getAuthRequest();
    console.log('userData: ', userData);

    return userData;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const logOut = createAsyncThunk('user/logOut', async (_, thunkApi) => {
  try {
    await logOutRequest();
    localStorage.removeItem('token');
    return null;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
