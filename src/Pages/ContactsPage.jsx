import BorderExample from '../components/Spiner/Spiner';

import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import  Form  from '../components/Form/Form';
import React, { useEffect } from 'react';
import { getContacts } from 'Redux/Contacts/operations';
import WithAuthRedirect from '../HOC/WithAuthRiderect';

function ContactsPage() {
  const { isLoading } = useSelector(state => state.contacts);
  //  const user = useSelector(state => state.auth.user);
 
  return (
    <div>
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
