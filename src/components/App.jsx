import React, { lazy, useEffect } from 'react';
import {  useDispatch, useSelector} from 'react-redux';


import { Suspense } from 'react';
import { Route, Routes, } from 'react-router-dom';

import NotFound from 'Pages/NotFound';
import AppBar from './AppBar/AppBar';

import { getAuth } from 'Redux/Auth/auth-operations';
import UserMenu from './UserMenu';
import { getContacts } from 'Redux/Contacts/operations';


const LazyHomePage = lazy(() => import('../Pages/HomePage'))
const LazyContactsPage = lazy(() => import('../Pages/ContactsPage'));
const LazyLoginPage = lazy(() => import('../Pages/LoginPage'));
const LazyRegistorPage = lazy(() => import('../Pages/RegistorPage'));

export const App = () => {
  const user = useSelector(state => state.auth.user);
  const isUserLoggedIn = Boolean(user);
  const dispatch = useDispatch();
const token = localStorage.getItem('token');
  useEffect(() => {
    if (!localStorage.getItem('token')) return;
    dispatch(getAuth());
    
  }, [dispatch]);
  //  const dispatch = useDispatch();
  //  const token = localStorage.getItem('token');

   useEffect(() => {
     if (token) dispatch(getContacts());
     console.log(token);
   }, [dispatch, token]);

  


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {token? <UserMenu /> : <p>Ви не авторизувались</p>}
      {/* user?.token */}
      <AppBar />
      <Suspense>
        <Routes>
          <Route path="/" element={<LazyHomePage />}></Route>
          <Route path="/register" element={<LazyRegistorPage />}></Route>
          <Route path="/login" element={<LazyLoginPage />}></Route>
          <Route path="/contacts" element={<LazyContactsPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
// export default App;
