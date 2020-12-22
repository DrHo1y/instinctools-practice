import React from 'react';
import { HeaderWrapperSecond } from '../../../styles/styledComponents';
import home from '../../../img/home.png';
import stays from '../../../img/stays.png';
import HeaderElement from './HeaderElement';

const HeaderSecond = (props) => {
  return (
    <HeaderWrapperSecond>
      <HeaderElement img={home} name={`Home`} active />
      <HeaderElement img={stays} name={`Stays`} />
    </HeaderWrapperSecond>
  );
};

export default HeaderSecond;
