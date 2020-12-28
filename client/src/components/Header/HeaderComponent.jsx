import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { theme, Header } from '../../styles/styledComponents';
import HeaderFirst from './HeaderFirst/HeaderFirst';
import HeaderSecond from './HeaderSecond/HeaderSecond';
import { signoutClickAction } from '../../redux/actions/userAction';

const HeaderComponent = (props) => {
  return (
    <Header color={theme.primaryColor}>
      <HeaderFirst
        id={props.user.currentUser.userId}
        userName={props.user.currentUser.name}
        isAuth={props.user.isAuth}
        isPartner={props.user.isPartner}
        signoutClick={props.signoutClickAction}
      />
      <HeaderSecond />
    </Header>
  );
};
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  signoutClickAction,
};

HeaderComponent.propTypes = {
  app: PropTypes.object,
  location: PropTypes.object,
  user: PropTypes.object,
  partner: PropTypes.object,
  signoutClickAction: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
