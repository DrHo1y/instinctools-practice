import React from 'react';
import { HeaderWrapperSecond } from '../../../styles/styledComponents';
import home from '../../../img/home.png';
import stays from '../../../img/stays.png';
import HeaderElement from './HeaderElement';

const HeaderSecond = (props) => {
  return (
    <HeaderWrapperSecond>
      <HeaderElement img={home} active />
      <HeaderElement img={stays} />
    </HeaderWrapperSecond>
  );
};

export default HeaderSecond;
