import BorderExample from '../components/Spiner/Spiner';

import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useSelector } from 'react-redux';
import  Form  from '../components/Form/Form';

function Contacts() {
  const { isLoading } = useSelector(state => state.contacts.contacts);
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
export default Contacts;
