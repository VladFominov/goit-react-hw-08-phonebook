import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'Redux/Auth/auth-operations';
import { SubmitBtn, Form, Input } from './styled';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { user, isLoading, error } = useSelector(state => state.auth);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
   useEffect(() => {
     if (!user) return;
     navigate('/contacts');
   }, [user, navigate]);

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
    console.log('finalData: ', finalData);
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
          <Input
            onChange={onChange}
            name="password"
            value={formData.password}
            type="text"
            placeholder="введіть пароль"
          />
        </label>
        <SubmitBtn type="submit" disabled={isLoading}>
          Підтвердити
        </SubmitBtn>
      </Form>
      {error.length > 0 && <p>Вибачте, виникла помилка</p>}
    </div>
  );
}
export default SignUpForm;
