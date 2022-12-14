import axios from 'axios';

const $publicHost = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
  headers: {
  'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
};

$privateHost.interceptors.request.use(authInterceptor);

export const signUpRequest = async (formData) => {
  const { data } = await $publicHost.post('/users/signup', formData);
  
  return data;
};

export const signInRequest = async formData => {
  const { data } = await $publicHost.post('/users/login', formData);
  return data;
};
// formData;

export const getContactsRequest = async () => {
  const { data } = await $privateHost.get('/contacts');
  return data;
};

// -------------------------------------------

export const fetchAllContacts = async () => {
  const { data } = await axios.get(
    `https://639596f590ac47c6806e69f2.mockapi.io/contacts`
  );
  return data;
};

export const addNewContactToBook = async contact => {
  const { data } = await axios.post(
    `https://639596f590ac47c6806e69f2.mockapi.io/contacts/`,
    contact
  );
  return data;
};

export const deleteContactFromBook = async contactId => {
  const { data } = await axios.delete(
    `https://639596f590ac47c6806e69f2.mockapi.io/contacts/${contactId}`
  );
  return data;
};
