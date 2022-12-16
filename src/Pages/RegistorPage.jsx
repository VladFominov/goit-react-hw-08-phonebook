import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'Redux/Auth/auth-operations';
import { SubmitBtn, Form, Input, Label, InputPassWrapper } from './styled';


function SignUpForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { user, error } = useSelector(state => state.auth);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
   useEffect(() => {
     if (user?.token) navigate('/contacts');
     ;
   }, [user, navigate]);
  
   const handleShowTaggle = () => {
     setShow(!show);
   };

  const onChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    const finalData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
   
dispatch(signUp(finalData));

    reset();
  };

  const reset = () => {
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <label>
          <Input
            onChange={onChange}
            name="name"
            value={formData.name}
            type="text"
            placeholder="введіть ім'я"
          />
        </label>
        <label>
          <Input
            onChange={onChange}
            name="email"
            value={formData.email}
            type="email"
            placeholder="введіть пошту"
          />
        </label>
        <label>
          <InputPassWrapper>
            <Input
              onChange={onChange}
              name="password"
              value={formData.password}
              type={show ? 'text' : 'password'}
              placeholder="введіть пароль"
            />
            <Label onClick={handleShowTaggle}>{show ? 'Hide' : 'Show'}</Label>
          </InputPassWrapper>
        </label>
        <SubmitBtn type="submit">Підтвердити</SubmitBtn>
      </Form>
      {error.length > 0 && <p>Вибачте, виникла помилка</p>}
    </div>
  );
}
export default SignUpForm;
