import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialState,

  extraReducers: builder => {
    builder.addCase(getContacts.pending, (state, action) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getContacts.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    });
    
      builder.addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      });

      builder.addCase(addContact.fulfilled, (state, action) => {
        state.contacts = [...state.contacts,action.payload];
        state.isLoading = false;
      });

      builder.addCase(addContact.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      });
    
     builder.addCase(deleteContact.pending, (state, action) => {
       state.isLoading = true;
       state.error = '';
     });

     builder.addCase(deleteContact.fulfilled, (state, action) => {
       state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
       state.isLoading = false;
     });

     builder.addCase(deleteContact.rejected, (state, action) => {
       state.error = action.payload.message;
       state.isLoading = false;
     });
  },
});

export const contactsReducer = contactsSlice.reducer;
