import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { HeaderWrapperFirstControlWrapper, Button } from '../../../styles/styledComponents';

const HeaderFirstControl = (props) => {
  const history = useHistory();
  return (
    <HeaderWrapperFirstControlWrapper>
      {!props.isPartner && (
        <Button
          border='1px solid white'
          textColor='white'
          style={{ marginLeft: 15 }}
          onClick={() => history.push('/partner/login')}
        >
          List your property
        </Button>
      )}
      {!props.isAuth && !props.isPartner && (
        <Button color='white' style={{ marginLeft: 15 }} onClick={() => history.push('/register')}>
          Regiter
        </Button>
      )}
      {!props.isAuth && !props.isPartner && (
        <Button color='white' style={{ marginLeft: 15 }} onClick={() => history.push('/login')}>
          Sign in
        </Button>
      )}
      {props.isAuth && props.isPartner && (
        <Button
          border='1px solid white'
          textColor='white'
          style={{ marginLeft: 15 }}
          onClick={() => history.push('/dashboard')}
        >
          My objects
        </Button>
      )}
      {props.isAuth && (
        <Button
          color='white'
          style={{ marginLeft: 15 }}
          onClick={() => history.push(`/user/${props.id}`)}
        >
          {props.userName}
        </Button>
      )}
      {props.isAuth && (
        <Button color='white' style={{ marginLeft: 15 }} onClick={() => props.signoutClick()}>
          Sign out
        </Button>
      )}
    </HeaderWrapperFirstControlWrapper>
  );
};
HeaderFirstControl.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isPartner: PropTypes.bool.isRequired,
  signoutClick: PropTypes.func.isRequired,
};

export default HeaderFirstControl;
