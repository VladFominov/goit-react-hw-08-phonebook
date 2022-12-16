// import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'Redux/Auth/auth-operations';
import { SubmitBtn, Form, Input, Wrapper, Label, InputPassWrapper } from './styled';

function LogInForm() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { user, error } = useSelector(state => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.token) navigate('/contacts');
    
  }, [user, navigate]);

  const handleShowTaggle = () => {
    setShow(!show)
  }

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
      email: formData.email,
      password: formData.password,
    };
    
    dispatch(signIn(finalData));

    reset();
  };

  const reset = () => {
    setFormData({email: '', password: '' });
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
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

        <SubmitBtn type="submit">Увійти</SubmitBtn>
      </Form>
      {error.length > 0 && <p>Вибачте, виникла помилка</p>}
    </Wrapper>
  );
}
export default LogInForm;
