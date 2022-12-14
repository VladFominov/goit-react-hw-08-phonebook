import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './auth-operations';

const initialState = {
  user: null,
  isLoading: false,
  error: '',
  // token: null,
  // isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.auth.user = action.payload;
      state.isLoading = false;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;

       builder.addCase(signIn.pending, (state, action) => {
         state.isLoading = true;
         state.error = '';
       });

       builder.addCase(signIn.fulfilled, (state, action) => {
         state.user = action.payload;
         state.isLoading = false;
       });

       builder.addCase(signIn.rejected, (state, action) => {
         state.error = action.payload.message;
         state.isLoading = false;
       });
    });
  },
});

export const authReducer = authSlice.reducer;
