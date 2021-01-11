import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginContainer from './pages/AuthPage/LoginPage/LoginContainer';
import RegisterContainer from './pages/AuthPage/RegisterPage/RegisterContainer';
import UserPage from './pages/AuthPage/UserPage';
import CatalogContainer from './pages/CatalogPage/CatalogContainer';
import MainPageContainer from './pages/MainPage/MainPageContainer';
import AddRoomsContainer from './pages/Partner/ParnterDashboardPage/AddRooms/AddRoomsContainer';
import DashboardAddContainer from './pages/Partner/ParnterDashboardPage/DashboardAdd/DashboardAddContainer';
import FacilityContainer from './pages/Partner/ParnterDashboardPage/Facility/FacilityContainer';
import PartnerDashboardContainer from './pages/Partner/ParnterDashboardPage/PartnerDashboardContainer';
import PartnerLoginContainer from './pages/Partner/PartnerLoginPage/PartnerLoginContainer';
import PartnerRegisterContainer from './pages/Partner/PartnerRegisterPage/PartnerRegisterContainer';

export const useRoutes = (authConf) => {
  if (authConf.isAuth && !authConf.isPartner) {
    return (
      <Switch>
        <Route path='/' component={MainPageContainer} exact />
        <Route path='/user/:id' component={UserPage} />
        <Route path='/partner/register' component={PartnerRegisterContainer} exact />
        <Route path='/partner/login' component={PartnerLoginContainer} exact />
        <Route path='/catalog/:where' component={CatalogContainer} />
        <Redirect to='/' />
      </Switch>
    );
  } else if (authConf.isAuth && authConf.isPartner) {
    return (
      <Switch>
        <Route path='/' component={MainPageContainer} exact />
        <Route path='/user/:id' component={UserPage} />
        <Route path='/dashboard' component={PartnerDashboardContainer} exact />
        <Route path='/dashboard/add' component={DashboardAddContainer} />
        <Route path='/facility/:id' component={FacilityContainer} />
        <Route path='/add/rooms/:id' component={AddRoomsContainer} />
        <Route path='/catalog/:where' component={CatalogContainer} />
        <Redirect to='/' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path='/' component={MainPageContainer} exact />
      <Route path='/login' component={LoginContainer} exact />
      <Route path='/register' component={RegisterContainer} exact />
      <Route path='/partner/register' component={PartnerRegisterContainer} exact />
      <Route path='/partner/login' component={PartnerLoginContainer} exact />
      <Route path='/catalog/:where' component={CatalogContainer} />
      <Redirect to='/' />
    </Switch>
  );
};
