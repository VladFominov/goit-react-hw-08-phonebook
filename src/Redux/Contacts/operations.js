import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactsRequest, deleteContactsRequest, getContactsRequest } from 'Services/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContactsRequest();

      return contacts;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const saveContact = await addContactsRequest(contact);
      console.log(saveContact);
      return saveContact;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
       await deleteContactsRequest(contactId);

      return contactId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
