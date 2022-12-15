import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  InputForm,
  Label,
  Input,
  InputNumber,
  FormContainer,
  BtnAdd,
  Span,
} from './Form.styled';


import { addContact } from 'Redux/Contacts/operations';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    //  if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
    //    return alert(formData.name + ' is already in contacts');
    //  }
    const contact = {
      name: formData.name,
      number: formData.number,
    };
    console.log(contact)
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <FormContainer>
      <InputForm onSubmit={onSubmit}>
        <Label>
          <Span>Ім'я</Span>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Span>Номер</Span>
          <InputNumber
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <BtnAdd type="submit">Додати контакт</BtnAdd>
      </InputForm>
    </FormContainer>
  );
};

export default Form;
