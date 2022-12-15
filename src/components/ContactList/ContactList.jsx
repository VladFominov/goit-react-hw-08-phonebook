import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/operations';
import BasicExample from '../Spiner/Spiner'; 
import { Li, BtnOnDelete } from './ContactList.styled';

const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const filteredContact = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const onDelete = (contactId) => {
  
  dispatch(deleteContact(contactId));
  };
  return (
    <ul>
      {error && <p>Вибачте, виникла помилка {error}</p>}
      {isLoading && <BasicExample />}
      {filteredContact().map(({ id, name, number }) => {
        return (
          <Li key={id}>
            {name}: {number}
            <BtnOnDelete type="button" onClick={() => onDelete(id)}>
              Видалити
            </BtnOnDelete>
          </Li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
