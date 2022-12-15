import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'Redux/Auth/auth-operations';

function UserMenu() {
  const user = useSelector(state => state.auth.user.user);

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
      <button type="button" onClick={onLogOut}>
        Вийти
      </button>
    </div>
  );
}

export default UserMenu;
