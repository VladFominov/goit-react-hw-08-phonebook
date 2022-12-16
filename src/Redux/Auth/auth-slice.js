import { createSlice } from '@reduxjs/toolkit';
import { getAuth, logOut, signIn, signUp } from './auth-operations';

const initialState = {
  user: null,
  isLoading: false,
  error: '',

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
      // state.auth.user = action.payload;
      state.user = action.payload;
      state.isLoading = false;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
 });
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

      builder.addCase(getAuth.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      });

    builder.addCase(getAuth.fulfilled, (state, action) => {
    
        state.user = { user: action.payload };
        state.isLoading = false;
      });

      builder.addCase(getAuth.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      });
   
        builder.addCase(logOut.pending, (state, action) => {
          state.isLoading = true;
          state.error = '';
        });

        builder.addCase(logOut.fulfilled, (state, action) => {
          state.user = { user: action.payload };
          state.isLoading = false;
        });

        builder.addCase(logOut.rejected, (state, action) => {
          state.error = action.payload.message;
          state.isLoading = false;
        });
  },
});

export const authReducer = authSlice.reducer;
