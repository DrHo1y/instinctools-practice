import React from 'react';
import { HeaderWrapperFirstControlWrapper, Button } from '../../../styles/styledComponents';

const HeaderFirstControl = (props) => {
  return (
    <HeaderWrapperFirstControlWrapper>
      {!props.isPartner && (
        <Button border='1px solid white' textColor='white' style={{ marginLeft: 15 }}>
          List your property
        </Button>
      )}
      {!props.isAuth && !props.isPartner && (
        <Button color='white' style={{ marginLeft: 15 }}>
          Regiter
        </Button>
      )}
      {!props.isAuth && !props.isPartner && (
        <Button color='white' style={{ marginLeft: 15 }}>
          Sign in
        </Button>
      )}
      {props.isAuth && props.isPartner && (
        <Button border='1px solid white' textColor='white' style={{ marginLeft: 15 }}>
          My objects
        </Button>
      )}
      {props.isAuth && (
        <Button color='white' style={{ marginLeft: 15 }} onClick={() => props.signoutClick()}>
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

export default HeaderFirstControl;
