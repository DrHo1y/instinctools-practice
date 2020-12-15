import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/AuthPage/LoginPage'
import RegisterPage from './pages/AuthPage/RegisterPage'
import UserPage from './pages/AuthPage/UserPage'
import MainPage from './pages/MainPage/MainPage'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/user:id' component={UserPage} />
        <Redirect to='/' />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/login' component={LoginPage} exact />
      <Route path='/register' component={RegisterPage} exact />
      <Redirect to='/' />
    </Switch>
  )
}
