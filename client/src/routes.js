import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginContainer from './pages/AuthPage/LoginPage/LoginContainer';
import RegisterContainer from './pages/AuthPage/RegisterPage/RegisterContainer';
import UserPage from './pages/AuthPage/UserPage';
import MainPage from './pages/MainPage/MainPage';

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/user:id' component={UserPage} />
        <Redirect to='/' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/login' component={LoginContainer} exact />
      <Route path='/register' component={RegisterContainer} exact />
      <Redirect to='/' />
    </Switch>
  );
};
