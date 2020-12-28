import React from 'react';
import PropTypes from 'prop-types';
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

HeaderFirst.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isPartner: PropTypes.bool.isRequired,
  signoutClick: PropTypes.func.isRequired,
};

export default HeaderFirst;
