import BorderExample from '../components/Spiner/Spiner';

import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import {  useSelector } from 'react-redux';
import  Form  from '../components/Form/Form';
// import React, { useEffect } from 'react';
// import { getContacts } from 'Redux/Contacts/operations';
import WithAuthRedirect from '../HOC/WithAuthRiderect';
import { getAuth } from 'Redux/Auth/auth-operations';
import UserMenu from 'components/UserMenu';
import AppBar from 'components/AppBar/AppBar';

function ContactsPage() {
  const { isLoading } = useSelector(state => state.contacts);
 const dispatch = useDispatch();
 const token = localStorage.getItem('token');
 useEffect(() => {
   if (!localStorage.getItem('token')) return;
   dispatch(getAuth());
 }, [dispatch]);

 useEffect(() => {
   if (token) dispatch(getContacts());
  
 }, [dispatch, token]);

  return (
    <div>
      <AppBar />
      {token ? <UserMenu /> : <p>Ви не авторизувались</p>}
      <h1>Книга контактів</h1>
      <Form />
      <h2>Контакти</h2>
      <Filter />
      {isLoading && <BorderExample />}

      <ContactList />
    </div>
  );
}
export default WithAuthRedirect(ContactsPage, '/login');
