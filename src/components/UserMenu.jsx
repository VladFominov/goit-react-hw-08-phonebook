import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'Redux/Auth/auth-operations';
import { BtnOnDelete } from './ContactList/ContactList.styled';

function UserMenu() {
  const user = useSelector(state => state.auth.user?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogOut = () => {
    navigate("/login");
    dispatch(logOut());
  };

  return (

    <div>
      <p>
        Ім'я:<b> {user?.name}</b>
      </p>
      <p>
        Email:<b> {user?.email}</b>
      </p>
      <BtnOnDelete type="button" onClick={onLogOut}>
        Вийти
      </BtnOnDelete>
    </div>
  );
}

export default UserMenu;
