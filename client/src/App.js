import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { useRoutes } from './routes';
import { Container } from './styles/styledComponents';
import HeaderComponent from './components/Header/HeaderComponent';

import { signinWithToken } from './redux/actions/userAction';
import { initialApp } from './redux/actions/appAction';

function App(props) {
  const { signinWithToken, initialApp } = props;
  useEffect(() => {
    initialApp();
  }, [initialApp]);
  useEffect(() => {
    signinWithToken();
  }, [signinWithToken]);
  const authConf = useSelector((state) => ({
    loading: state.app.loading,
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
