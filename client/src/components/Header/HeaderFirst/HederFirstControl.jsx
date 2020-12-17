import React from 'react';
import {
  HeaderWrapperFirstControlWrapper,
  Button,
} from '../../../styles/styledComponents';

const HeaderFirstControl = (props) => {
  return (
    <HeaderWrapperFirstControlWrapper>
      <Button
        border='1px solid white'
        textColor='white'
        style={{ marginLeft: 15 }}
      >
        List your property
      </Button>
      {!props.isAuth && (
        <Button color='white' style={{ marginLeft: 15 }}>
          Regiter
        </Button>
      )}
      {!props.isAuth && (
        <Button color='white' style={{ marginLeft: 15 }}>
          Sign in
        </Button>
      )}
      {props.isAuth && (
        <Button
          color='white'
          style={{ marginLeft: 15 }}
          onClick={() => props.signoutClick()}
        >
          Sign out
        </Button>
      )}
    </HeaderWrapperFirstControlWrapper>
  );
};

export default HeaderFirstControl;
