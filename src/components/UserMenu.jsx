import React from 'react'
import { useSelector } from 'react-redux';

function UserMenu() {
  const user = useSelector(state => state.auth.user);
  return (
    <div>
      <p>
        Ім'я:<b> {user.name}</b>
      </p>
      <p>
        Email:<b> {user.email}</b>
      </p>
      <button type="button">Вийти</button>
    </div>
  );
}

export default UserMenu;