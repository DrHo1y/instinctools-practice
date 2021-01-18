import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';

import { Provider, connect, useSelector } from 'react-redux';
import store from './redux/store';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { alertOptiosn } from './components/Alert/index';

import HeaderComponent from './components/Header/HeaderComponent';

import { signinWithToken } from './redux/actions/userAction';
import { initialApp } from './redux/actions/appAction';

import { Container } from './styles/styledComponents';

function App(props) {
  const { signinWithToken, initialApp } = props;
  React.useEffect(() => {
    initialApp();
  }, [initialApp]);
  React.useEffect(() => {
    signinWithToken();
  }, [signinWithToken]);
  const authConf = useSelector((state) => ({
    loading: state.app.globalLoading,
    isAuth: state.user.isAuth,
    isPartner: state.user.isPartner,
  }));
  const routes = useRoutes(authConf);

  if (!authConf.loading) {
    return (
      <BrowserRouter>
        <Container headerSize='110px'>
          <HeaderComponent />
          {routes}
        </Container>
      </BrowserRouter>
    );
  } else {
    return <div>Error</div>;
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  signinWithToken,
  initialApp,
};

App.propTypes = {
  app: PropTypes.object.isRequired,
  location: PropTypes.object,
  user: PropTypes.object.isRequired,
  partner: PropTypes.object,
  initialApp: PropTypes.func.isRequired,
  signinWithToken: PropTypes.func.isRequired,
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

const BookerApp = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptiosn}>
        <AppContainer />
      </AlertProvider>
    </Provider>
  );
};

export default BookerApp;
