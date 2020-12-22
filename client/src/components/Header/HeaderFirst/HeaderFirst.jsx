import React from 'react';
import HeaderFirstLogo from './HeaderFIrstLogo';
import { HeaderWrapperFirst } from '../../../styles/styledComponents';
import HeaderFirstControl from './HederFirstControl';

const HeaderFirst = (props) => {
  return (
    <HeaderWrapperFirst>
      <HeaderFirstLogo />
      <HeaderFirstControl
        id={props.id}
        userName={props.userName}
        isAuth={props.isAuth}
        isPartner={props.isPartner}
        signoutClick={props.signoutClick}
      />
    </HeaderWrapperFirst>
  );
};

export default HeaderFirst;
