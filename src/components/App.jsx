import React, { lazy, useEffect } from 'react';
import {  useDispatch, useSelector} from 'react-redux';


import { Suspense } from 'react';
import { Route, Routes, } from 'react-router-dom';

import NotFound from 'Pages/NotFound';
import AppBar from './AppBar/AppBar';

import { getAuth } from 'Redux/Auth/auth-operations';
import UserMenu from './UserMenu';


const LazyHomePage = lazy(() => import('../Pages/HomePage'))
const LazyContactsPage = lazy(() => import('../Pages/ContactsPage'));
const LazyLoginPage = lazy(() => import('../Pages/LoginPage'));
const LazyRegistorPage = lazy(() => import('../Pages/RegistorPage'));

export const App = () => {
   const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('token')) return;
    dispatch(getAuth());
  }, [dispatch]);

  


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
      {user?.token ? <UserMenu /> : <p>Ви не авторизувались</p>}

      <AppBar />
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={<LazyHomePage />}
          ></Route>
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
