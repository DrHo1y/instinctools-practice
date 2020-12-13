import React from 'react'
import {
  HeaderWrapperFirstLogoWrapper,
  LogoSpan,
  Logo,
} from '../../../styles/styledComponents'

const HeaderFirstLogo = (props) => {
  return (
    <HeaderWrapperFirstLogoWrapper>
      <Logo>
        Booker.<LogoSpan>com</LogoSpan>
      </Logo>
    </HeaderWrapperFirstLogoWrapper>
  )
}

export default HeaderFirstLogo
