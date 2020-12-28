import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRoutes } from './routes';
import { signinWithToken } from './redux/actions/userAction';
import { initialApp } from './redux/actions/appAction';

import HeaderComponent from './components/Header/HeaderComponent';
import { Container } from './styles/styledComponents';

function App(props) {
  const { signinWithToken, initialApp } = props;
  useEffect(() => {
    initialApp();
  }, [initialApp]);
  useEffect(() => {
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
  app: PropTypes.object,
  location: PropTypes.object,
  user: PropTypes.object,
  partner: PropTypes.object,
  initialApp: PropTypes.func,
  signinWithToken: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
